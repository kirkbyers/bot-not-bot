function tweetToDoc(tweet) {
  const addFields = {};
  return Object.assign({}, tweet, addFields);
}

module.exports = tweetToDoc;
