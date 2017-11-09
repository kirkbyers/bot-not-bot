const { createUserToken } = require('./create-user-token');
const { sendMessage } = require('../emails');
const { query } = require('../../db');
const { randomInt } = require('../../utils');

async function addUser(userEmail) {
  const user = {
    email: userEmail,
  };
  const dataDocCount = await query('bonb', async col => col.count());
  const token = await createUserToken(user);
  user.token = token;
  user.responses = {};
  user.responsesCount = 0;
  user.startingIndex = randomInt(0, dataDocCount);
  await query('users', col => col.insertOne(user));
  const url = encodeURI(`${process.env.BASE_URL}?auth=${token}`);
  await sendMessage(userEmail, 'Help Us Classify Data', `
  <p>Howdy!</p>
  <p style="text-align: center">Help up classify data by visiting <a href="${url}" target="_blank">${url}</a>.</p>
  `);
  return true;
}

module.exports = {
  addUser,
};
