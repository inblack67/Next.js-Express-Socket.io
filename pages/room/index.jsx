import { useEffect, useState, Fragment } from 'react';
import io from 'socket.io-client';
import { server } from '../../src/server';
import UserItem from '../../components/UserItem';
import MessageItem from '../../components/MessageItem';

let socket;

const index = ({ username, room }) => {
  const [noti, setNoti] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket = new io(`${server}`);
    socket.emit('joinRoom', { username, room });
  }, []);

  useEffect(() => {
    socket.on('noti', (noti) => M.toast({ html: noti }));
    socket.on('message', (message) => {
      setMessages([message, ...messages]);
    });
    socket.on('roomUsers', ({ users }) => {
      console.log(users);
      setUsers(users);
    });
  });

  return (
    <div className='container'>
      <div className='card black'>
        <div className='card-content'>
          <span className='card-title'>{room}</span>
        </div>
        <div className='card-action'>
          <a href='#!'>{username}</a>
        </div>
      </div>
      <Fragment>
        <p className='flow-text center blue-text'>Users</p>
        <ul className='collection white-text'>
          {users.length > 0 ? (
            users.map(({ username }, index) => (
              <UserItem username={username} key={index} />
            ))
          ) : (
            <p className='flow-text center red-text'>No users yet.</p>
          )}
        </ul>
      </Fragment>
      <Fragment>
        <p className='flow-text center blue-text'>Messages</p>
        <ul className='collection white-text'>
          {messages.length > 0 ? (
            messages.map((data, index) => (
              <MessageItem data={data} key={index} />
            ))
          ) : (
            <p className='flow-text center green-text'>No messages yet.</p>
          )}
        </ul>
      </Fragment>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const { username, room } = ctx.req.query;
  return {
    props: {
      username,
      room,
    },
  };
};

export default index;
