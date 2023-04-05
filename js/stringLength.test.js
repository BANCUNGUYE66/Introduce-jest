const stringLength = require('./stringLength');

test('returns the length of the string if it is between 1 and 10 characters long', () => {
  expect(stringLength('hello')).toBe(5);
  expect(stringLength('a')).toBe(1);
  expect(stringLength('1234567890')).toBe(10);
});

test('throws an error if the input string is too short or too long', () => {
  expect(() => stringLength('')).toThrow('Input string must be at least 1 character long.');
  expect(() => stringLength('12345678901')).toThrow('Input string must be no longer than 10 characters.');
});
