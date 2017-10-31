const { query } = require('../../db');

async function getDataByProcessedId(processedId) {
  return query('bonb', async col => col.findOne({ processedId }));
}

module.exports = getDataByProcessedId;
