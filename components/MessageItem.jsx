import PropTypes from 'prop-types';

const MessageItem = ({ data: { text, username, date } }) => {
  return (
    <div className='card black white-text'>
      <div className='card-content'>
        <p>{text}</p>
      </div>
      <div className='card-action'>
        <a href='#!'>{username}</a>
        <a href='#!'>{date}</a>
      </div>
    </div>
  );
};

MessageItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MessageItem;
