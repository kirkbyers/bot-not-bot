const { insertData } = require('./data');
const { sendMessage } = require('./emails');
const {
  addUser, createUserToken, getUserByEmail, validateUserToken,
} = require('./users');

const serveUserData = require('./serve-user-data');

module.exports = {
  addUser,
  createUserToken,
  getUserByEmail,
  insertData,
  sendMessage,
  serveUserData,
  validateUserToken,
};
