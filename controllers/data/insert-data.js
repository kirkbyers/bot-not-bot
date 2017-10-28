const { query } = require('../../db');
const { dataToDoc } = require('../../utils');

// Insert many tweets
async function insertData(dataArray) {
  try {
    const insertDocs = dataArray.map(tweet => dataToDoc(tweet));
    const insert = await query('bonb', async col => col.insertMany(insertDocs));
    return insert;
  } catch (err) {
    return { err };
  }
}

module.exports = insertData;
