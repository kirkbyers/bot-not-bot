import getDataCount from './get-data-count';

import query from '../../db/query';
import { dataToDoc } from '../../utils';

// Insert many tweets
async function insertData(dataArray: any[], dataName: string) {
  try {
    const existingDataCount = await getDataCount('bonb');
    const insertDocs = dataArray.map((tweet, index) => {
      const formatedDoc = dataToDoc(tweet);
      formatedDoc.processedId = existingDataCount + index;
      return formatedDoc;
    });
    const insert = await query('bonb', async (col) => col.insertMany(insertDocs));
    if (dataName) {
      await query('imports', (col) => col.insertOne({ fileName: dataName }));
    }
    return insert;
  } catch (err) {
    return { err };
  }
}

export default insertData;
