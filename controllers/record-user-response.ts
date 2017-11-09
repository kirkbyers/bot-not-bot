import { query } from '../db';

async function recordUserResponse(processedId: number, userEmail: string, response: string) {
  const userResponsesString = `responses.${processedId}`;
  const dataResponseString = `responses.${response}`;
  await query('users', async (col) => col.findOneAndUpdate(
    { email: userEmail },
    { $set: { [userResponsesString]: response }, $inc: { responsesCount: 1 } },
  ));
  await query('bonb', async (col) => col.findOneAndUpdate(
    { processedId: Number(processedId) },
    { $inc: { [dataResponseString]: 1 } },
  ));
}

export default recordUserResponse;
