import { useEffect, useState } from 'react';
import io from 'socket.io-client';

let socket;

const index = () => {
  const [noti, setNoti] = useState('');

  useEffect(() => {
    socket = new io('/');
    socket.on('noti', (noti) => {
      setNoti(noti);
    });
  }, []);

  return (
    <div>
      <h1>home</h1>
      {noti.length > 0 && <p>{noti}</p>}
    </div>
  );
};

export default index;
