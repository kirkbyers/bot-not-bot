const { query } = require('../db');


async function recordUserResponse(processedId, userEmail, response) {
  const userResponsesString = `responses.${processedId}`;
  const dataResponseString = `responses.${response}`;
  await query('users', async col => col.findOneAndUpdate(
    { email: userEmail },
    { $set: { [userResponsesString]: response }, $inc: { responsesCount: 1 } },
  ));
  await query('bonb', async col => col.findOneAndUpdate(
    { processedId },
    { $inc: { [dataResponseString]: 1 } },
  ));
}

exports.module = recordUserResponse;
