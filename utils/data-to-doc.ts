import getClassificationOptions from './get-classification-options';

function dataToDoc(dataEntry: any, processedId: number) {
  const optionsArray = getClassificationOptions();
  const addFields: any = {
    responses: {},
  };
  optionsArray.forEach((option) => {
    addFields.responses[option] = 0;
  });
  if (processedId) {
    addFields.processedId = processedId;
  }
  return Object.assign({}, dataEntry, addFields);
}

export default dataToDoc;
