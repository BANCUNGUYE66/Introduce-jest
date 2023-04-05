function stringLength(string) {
  if (string.length < 1) {
    throw new Error('Input string must be at least 1 character long.');
  }
  if (string.length > 10) {
    throw new Error('Input string must be no longer than 10 characters.');
  }
  return string.length;
}

module.exports = stringLength
