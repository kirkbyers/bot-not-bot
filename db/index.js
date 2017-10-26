const { MongoClient } = require('mongodb');

const connectionUrl = 'mongodb://bonb-mongo:27017/bonb';

async function dbQuerry(collectionName = 'test', query) {
  try {
    const db = await MongoClient.connect(connectionUrl);
    const col = await db.collection(collectionName);
    const results = await query(col);
    db.close();
    return results;
  } catch (err) {
    console.log(`There was an err with your query: ${err}`);
    return null;
  }
}

module.exports = {
  query: dbQuerry,
};
