const { getDataCount, getDataByProcessedId } = require('./data');
const { getUserByEmail } = require('./users');

async function serveUserData(email) {
  const user = await getUserByEmail(email);
  const dataCount = await getDataCount('bonb');
  const findProcessedId = (user.startingIndex + user.responsesCount) % dataCount;
  return user.responsesCount < dataCount ? getDataByProcessedId(findProcessedId) : null;
}

module.export = serveUserData;
