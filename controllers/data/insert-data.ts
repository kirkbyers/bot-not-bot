const getDataCount = require('./get-data-count');

const query = require('../../db/query');
const { dataToDoc } = require('../../utils');

// Insert many tweets
async function insertData(dataArray, dataName) {
  try {
    const existingDataCount = await getDataCount('bonb');
    const insertDocs = dataArray.map((tweet, index) => {
      const formatedDoc = dataToDoc(tweet);
      formatedDoc.processedId = existingDataCount + index;
      return formatedDoc;
    });
    const insert = await query('bonb', async col => col.insertMany(insertDocs));
    if (dataName) {
      await query('imports', col => col.insertOne({ fileName: dataName }));
    }
    return insert;
  } catch (err) {
    return { err };
  }
}

module.exports = insertData;
