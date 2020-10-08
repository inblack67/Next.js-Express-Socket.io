import PropTypes from 'prop-types';

const MessageItem = ({ data: { text, username, date } }) => {
  return (
    <div className='card black white-text'>
      <div className='card-content'>
        <span className='card-title'>{username}</span>
        <p>{text}</p>
      </div>
      <div className='card-action'>
        <a href='#!'>{date}</a>
      </div>
    </div>
  );
};

MessageItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MessageItem;
