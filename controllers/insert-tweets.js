const { query } = require('../db');
const { dataToDoc } = require('../utils');

// Insert many tweets
async function insertTweets(tweets) {
  try {
    const insertDocs = tweets.map(tweet => dataToDoc(tweet));
    const insert = await query('bonb', async col => col.insertMany(insertDocs));
    return insert;
  } catch (err) {
    return { err };
  }
}

module.exports = insertTweets;
