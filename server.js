const express = require('express');
const next = require('next');
const http = require('http');
const socketIo = require('socket.io');
require('colors');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const expressApp = express();
const server = http.createServer(expressApp);
const io = socketIo(server);

io.on('connect', (socket) => {
  socket.emit('noti', 'welcome to nextjs');
});

nextApp.prepare().then(() => {

  expressApp.get('/api', (req, res) => {
    res
      .status(200)
      .json({ success: true, msg: 'Custom express server up and running' });
  });

  expressApp.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server started on port ${port}`.green.bold);
  });
});
