const { query } = require('../../db');

async function getUserByEmail(email) {
  try {
    const user = await query('users', async col => col.findOne({ email }));
    return user;
  } catch (err) {
    return { error: err };
  }
}

module.exports = getUserByEmail;
