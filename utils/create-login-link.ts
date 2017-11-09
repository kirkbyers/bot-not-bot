function createLoginLink(token: string) {
  const url = encodeURI(`${process.env.BASE_URL}?auth=${token}`);
  return url;
}

export default createLoginLink;
