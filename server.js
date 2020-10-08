const express = require('express');
const next = require('next');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const { formatMessage } = require('./src/formatMessages');
const {
  joinUser,
  getCurrentUser,
  leaveUser,
  getRoomUsers,
} = require('./src/users');

require('colors');

const bot = 'ChatBot';
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const expressApp = express();
const server = http.createServer(expressApp);
const io = socketIo(server);

nextApp.prepare().then(() => {
  expressApp.get('/api', (req, res) => {
    res
      .status(200)
      .json({ success: true, msg: 'Custom express server up and running' });
  });

  expressApp.use(cors());

  expressApp.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server started on port ${port}`.green.bold);
  });
});

io.on('connect', (socket) => {
  socket.emit('noti', 'welcome to nextjs');
  socket.on('joinRoom', ({ username, room }) => {
    const newUser = joinUser(socket.id, username, room);

    socket.join(newUser.room);

    socket.emit(
      'message',
      formatMessage(bot, `Welcome To ChatBot, ${username}`)
    );
    socket.broadcast
      .to(newUser.room)
      .emit('message', formatMessage(bot, `${username} is here`));

    io.to(newUser.room).emit('roomUsers', {
      room: newUser.room,
      users: getRoomUsers(newUser.room),
    });

    socket.on('chatMessage', (message) => {
      const currentUser = getCurrentUser(socket.id);
      io.to(currentUser.room).emit(
        'message',
        formatMessage(currentUser.username, message)
      );
    });

    socket.on('disconnect', () => {
      const leftUser = leaveUser(socket.id);

      if (leftUser) {
        io.to(leftUser.room).emit(
          'message',
          formatMessage(bot, `${leftUser.username} has left`)
        );

        io.to(leftUser.room).emit('userLeft', leftUser.id);

        io.to(leftUser.room).emit('roomUsers', {
          room: leftUser.room,
          users: getRoomUsers(leftUser.room),
        });
      }
    });
  });
});
