function getRandomIntInclusive(min: number, max: number) {
  const roundMin = Math.ceil(min);
  const roundMax = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * ((roundMax - roundMin) + 1)) + roundMin;
}

export default getRandomIntInclusive;
