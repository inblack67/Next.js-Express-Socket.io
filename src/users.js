const users = [];

export function joinUser(id, username, room) {
  const user = { id, username, room };
  users.push(user);
  return user;
}

export function getCurrentUser(id) {
  const user = users.find((user) => user.id === id);
  return user;
}

export function leaveUser(id) {
  const user = users.find((user) => user.id === id);
  users.filter((user) => user.id !== id);
  return user;
}

export function getRoomUsers(room) {
  const availUsers = users.filter((user) => user.room === room);
  return availUsers;
}
