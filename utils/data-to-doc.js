const getClassificationOptions = require('./get-classification-options');

function dataToDoc(dataEntry, processedId) {
  const optionsArray = getClassificationOptions();
  const addFields = {};
  optionsArray.forEach((option) => {
    addFields[option] = 0;
  });
  if (processedId) {
    addFields.processedId = processedId;
  }
  return Object.assign({}, dataEntry, addFields);
}

module.exports = dataToDoc;
