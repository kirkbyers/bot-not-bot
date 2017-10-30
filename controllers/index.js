const { insertData } = require('./data');
const { sendMessage } = require('./emails');
const {
  addUser, createUserToken, getUserByEmail, validateUserToken,
} = require('./users');

module.exports = {
  addUser,
  createUserToken,
  getUserByEmail,
  insertData,
  sendMessage,
  validateUserToken,
};
