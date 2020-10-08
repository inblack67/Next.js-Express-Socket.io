import moment from 'moment';

export function formatMessage(username, text) {
  return {
    username,
    text,
    date: moment().format('h:mm:a'),
  };
}
