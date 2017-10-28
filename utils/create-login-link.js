function createLoginLink(token) {
  const url = `${process.env.BASE_URL}?auth=${token}`;
  return url;
}

module.exports = createLoginLink;
