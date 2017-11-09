import * as express from 'express';

import { addUser, sendMessage } from '../controllers';
import { query } from '../db';
import { createLoginLink } from '../utils';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await query('users', (col) => col.findOne({ email }));
    const url = createLoginLink(user.token);
    await sendMessage(email, 'Login Magic Link', `
  <p>Howdy</p>
  <p>A new login magic link was requested for this email. If this was not you, please contact us.</p>
  <p>Please visit <a href="${url}" target="_blank">${url}</a> to login.</p>
  `);
  } catch (err) {
    await addUser(email);
  }
  res.send('Login email sent');
});

export default router;
