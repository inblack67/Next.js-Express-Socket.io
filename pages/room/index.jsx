import { useEffect, useState, Fragment } from 'react';
import io from 'socket.io-client';
import UserItem from '../../components/UserItem';
import MessageItem from '../../components/MessageItem';
import { useForm } from 'react-hook-form';

let socket;

const index = ({ username, room }) => {
  const [noti, setNoti] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const { handleSubmit, register } = useForm({
    defaultValues: {
      message: 'Hello Hell',
    },
  });

  useEffect(() => {
    socket = new io(`/`);
    socket.emit('joinRoom', { username, room });
  }, []);

  useEffect(() => {
    socket.on('noti', (noti) => M.toast({ html: noti }));
    socket.on('message', (message) => {
      setMessages([message, ...messages]);
    });
    socket.on('roomUsers', ({ users }) => {
      setUsers(users);
    });
  });

  return (
    <div className='container'>
      <div className='card black grey darken-4'>
        <div className='card-content'>
          <span className='card-title'>{room}</span>
        </div>
        <div className='card-action'>
          <a href='#!'>{username}</a>
        </div>
      </div>
      <div className='container'>
        <form
          onSubmit={handleSubmit(({ message }) => {
            socket.emit('chatMessage', message);
          })}
        >
          <div className='input-field'>
            <input
              type='text'
              name='message'
              ref={register({
                required: true,
              })}
            />
            <span className='helper-text blue-text'>Message</span>
            <div className='input-field'>
              <button type='submit' className='btn red'>
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
      <Fragment>
        <p className='flow-text center blue-text'>Messages</p>
        <ul className='collection white-text'>
          {messages.length > 0 ? (
            messages.map((data, index) => (
              <MessageItem data={data} key={index} />
            ))
          ) : (
            <p className='flow-text center blue-text'>No messages yet.</p>
          )}
        </ul>
      </Fragment>
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
