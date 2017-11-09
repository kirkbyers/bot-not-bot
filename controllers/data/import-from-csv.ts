import * as fastCsv from 'fast-csv';

import insertData from './insert-data';

async function importFromCsv(pathToCsv: string) {
  const dataArray: any[] = [];
  fastCsv.fromPath(pathToCsv, {
    headers: true,
  })
    .on('data', (data) => {
      dataArray.push(data);
    })
    .on('end', () => {
      insertData(dataArray, pathToCsv)
        .then((res: any) => {
          if (res.err) {
            console.log(`insert err: ${res.err}`);
          } else {
            console.log('Done inserting');
          }
        });
    });
}

export default importFromCsv;
