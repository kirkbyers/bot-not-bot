const { query } = require('../../db');

async function getDataCount(collection) {
  return query(collection, async col => col.count());
}

module.exports = getDataCount;
