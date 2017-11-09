import { Collection, MongoClient } from 'mongodb';

const connectionUrl = process.env.MONGO_CONNECTION || 'mongodb://bonb-mongo:27017/bonb';

async function query(collectionName = 'test', dbQuery: (collection: Collection) => Promise<any>) {
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

export default query;
