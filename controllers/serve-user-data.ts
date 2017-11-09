import { getDataByProcessedId, getDataCount } from './data';
import { getUserByEmail } from './users';

async function serveUserData(email: string) {
  const user = await getUserByEmail(email);
  const dataCount = await getDataCount('bonb');
  const findProcessedId = (user.startingIndex + user.responsesCount) % dataCount;
  return user.responsesCount < dataCount ? getDataByProcessedId(findProcessedId) : null;
}

export default serveUserData;
