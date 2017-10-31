const { getDataCount, getDataByProcessedId } = require('./data');
const { getUserByEmail } = require('./users');

async function serveUserData(email) {
  const user = await getUserByEmail(email);
  const dataCount = await getDataCount('bonb');
  const findProcessedId = (user.startingIndex + user.responsesCount) % dataCount;
  return getDataByProcessedId(findProcessedId);
}

module.export = serveUserData;
