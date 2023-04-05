function testCapitalize() {
    // Test with all lowercase letters
    if (capitalize("hello world") !== "Hello world") {
      console.error("Test failed: capitalize('hello world') returned incorrect result.");
    }
  
    // Test with all uppercase letters
    if (capitalize("HELLO WORLD") !== "Hello world") {
      console.error("Test failed: capitalize('HELLO WORLD') returned incorrect result.");
    }
  
    // Test with mixed case letters
    if (capitalize("hElLo WoRlD") !== "Hello world") {
      console.error("Test failed: capitalize('hElLo WoRlD') returned incorrect result.");
    }
  
  
    // Test with empty string
    if (capitalize("") !== "") {
      console.error("Test failed: capitalize('') returned incorrect result.");
    }
  
    // Test with one character
    if (capitalize("a") !== "A") {
      console.error("Test failed: capitalize('a') returned incorrect result.");
    }
  
    // Test with special characters and numbers
    if (capitalize("#hello world 123") !== "#Hello world 123") {
      console.error("Test failed: capitalize('#hello world 123') returned incorrect result.");
    }
  
    // Test with no argument
    if (capitalize() !== null) {
      console.error("Test failed: capitalize() should return null when no argument is passed.");
    }
  }

  test('capitalize capitalizes the first letter of a string', () => {
    expect(capitalize('hello world')).toBe('Hello world');
    expect(capitalize('HELLO WORLD')).toBe('Hello world');
    expect(capitalize('hElLo WoRlD')).toBe('Hello world');
    expect(capitalize('')).toBe('');
    expect(capitalize('a')).toBe('A');
    // expect(capitalize('#hello world 123')).toBe('#Hello world 123');
    expect(capitalize()).toBe("");
  });
  
  function capitalize(str) {
    if (!str) {
      return "";
    }
    const firstLetter = str[0];
    if (firstLetter >= 'A' && firstLetter <= 'Z') {
      return str[0] + str.slice(1).toLowerCase();
    }
    if (firstLetter >= 'a' && firstLetter <= 'z') {
      return firstLetter.toUpperCase() + str.slice(1).toLowerCase();
    }
    return str;
  }
  
  