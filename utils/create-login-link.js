function createLoginLink(token) {
  const url = encodeURI(`${process.env.BASE_URL}?auth=${token}`);
  return url;
}

module.exports = createLoginLink;
