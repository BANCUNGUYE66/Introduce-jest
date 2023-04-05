const reverseString = require('./reverseString');
test('reverseString function reverses string correctly', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('12345')).toBe('54321');
  });
  