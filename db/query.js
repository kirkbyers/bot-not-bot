const { MongoClient } = require('mongodb');

const connectionUrl = 'mongodb://bonb-mongo:27017/bonb';

async function query(collectionName = 'test', dbQuery) {
  try {
    const db = await MongoClient.connect(connectionUrl);
    const col = await db.collection(collectionName);
    const results = await dbQuery(col);
    db.close();
    return results;
  } catch (err) {
    console.log(`There was an err with your query: ${err}`);
    return null;
  }
}

module.exports = query;
