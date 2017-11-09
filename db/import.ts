import importFromCsv from '../controllers/data/import-from-csv';
import query from './query';

async function importFile(fileName) {
  const importRecord = await query('imports', async (col) => col.findOne({ fileName }));
  if (!importRecord) {
    await importFromCsv(fileName);
  }
}

export default importFile;
