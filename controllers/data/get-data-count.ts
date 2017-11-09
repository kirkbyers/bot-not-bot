import query from '../../db/query';

async function getDataCount(collectionString: string) {
  return query(collectionString, async (col) => col.count({}));
}

export default getDataCount;
