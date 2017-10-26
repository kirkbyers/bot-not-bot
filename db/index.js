const { MongoClient } = require('mongodb');

const connectionUrl = 'mongodb://bonb-mongo:27017/bonb';

async function dbQuerry(collectionName = 'test', query) {
  try {
    const db = await MongoClient.connect(connectionUrl);
    const col = await db.collection(collectionName);
    await query(col);
    db.close();
  } catch (err) {
    console.log(`There was an err with your query: ${err}`);
  }
}

module.exports = {
  query: dbQuerry,
};
