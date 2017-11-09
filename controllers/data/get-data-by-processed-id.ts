const { query } = require('../../db');

async function getDataByProcessedId(processedId) {
  return query('bonb', async col => col.findOne({ processedId: Number(processedId) }));
}

module.exports = getDataByProcessedId;
