import { query } from '../../db';

async function getUserByEmail(email: string) {
  try {
    const user = await query('users', async (col) => col.findOne({ email }));
    return user;
  } catch (err) {
    return { error: err };
  }
}

export default getUserByEmail;
