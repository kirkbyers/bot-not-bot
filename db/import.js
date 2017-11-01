const query = require('./query');
const importFromCsv = require('../controllers/data/import-from-csv');

async function importFile(fileName) {
  const importRecord = await query('imports', async col => col.findOne({ fileName }));
  if (!importRecord) {
    await importFromCsv(fileName);
  }
}

module.exports = importFile;
