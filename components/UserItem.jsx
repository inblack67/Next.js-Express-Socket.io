import PropTypes from 'prop-types';

const UserItem = ({ username }) => {
  return <li className='collection-item white-text black'>{username}</li>;
};

UserItem.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserItem;
