function getClassificationOptions() {
  const options = process.env.CLASSIFICATION_OPTS || 'bot,notBot';
  const optionsArray = options.split(',');
  return optionsArray;
}

module.exports = getClassificationOptions;
