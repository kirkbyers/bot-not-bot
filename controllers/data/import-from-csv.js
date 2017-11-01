const fastCsv = require('fast-csv');

const insertData = require('./insert-data');

async function importFromCsv(pathToCsv) {
  const dataArray = [];
  fastCsv.fromPath(pathToCsv, {
    headers: true,
  })
    .on('data', (data) => {
      dataArray.push(data);
    })
    .on('end', () => {
      insertData(dataArray, pathToCsv)
        .then((res) => {
          if (res.err) {
            console.log(`insert err: ${res.err}`);
          } else {
            console.log('Done inserting');
          }
        });
    });
}

module.exports = importFromCsv;
