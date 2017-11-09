import { query } from '../../db';

async function getDataByProcessedId(processedId: number | string) {
  return query('bonb', async (col) => col.findOne({ processedId: Number(processedId) }));
}

export default getDataByProcessedId;
