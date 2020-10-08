const index = ({ username, room }) => {
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
