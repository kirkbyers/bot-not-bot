const getClassificationOptions = require('./get-classification-options');

function dataToDoc(dataEntry) {
  const optionsArray = getClassificationOptions();
  const addFields = {};
  optionsArray.forEach((option) => {
    addFields[option] = 0;
  });
  return Object.assign({}, dataEntry, addFields);
}

module.exports = dataToDoc;
