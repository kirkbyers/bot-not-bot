const { getUserByEmail } = require('./users');

async function serveUserData(email) {
  const user = await getUserByEmail(email);
}
