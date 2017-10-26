const { query } = require('../db');
const { tweetToDoc } = require('../utils');

async function insertTweets(tweets) {
  try {
    const insertDocs = tweets.map(tweet => tweetToDoc(tweet));
    const insert = await query('bonb', async col => col.insertMany(insertDocs));
    return insert;
  } catch (err) {
    return { err };
  }
}

module.exports = insertTweets;
