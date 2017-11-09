import { query } from '../../db';
import { randomInt } from '../../utils';
import { sendMessage } from '../emails';
import { createUserToken } from './create-user-token';

async function addUser(userEmail: string) {
  const user: any = {
    email: userEmail,
  };
  const dataDocCount = await query('bonb', async (col) => col.count({}));
  const token = await createUserToken(user);
  user.token = token;
  user.responses = {};
  user.responsesCount = 0;
  user.startingIndex = randomInt(0, dataDocCount);
  await query('users', (col) => col.insertOne(user));
  const url = encodeURI(`${process.env.BASE_URL}?auth=${token}`);
  await sendMessage(userEmail, 'Help Us Classify Data', `
  <p>Howdy!</p>
  <p style="text-align: center">Help up classify data by visiting <a href="${url}" target="_blank">${url}</a>.</p>
  `);
  return true;
}

export {
  addUser,
};
