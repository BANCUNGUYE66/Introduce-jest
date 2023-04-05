describe('stringLength', () => {
    test('returns the length of a string', () => {
      expect(stringLength('hello')).toBe(5);
      expect(stringLength('')).toBe(0);
      expect(stringLength('12345')).toBe(5);
      expect(stringLength('   ')).toBe(3);
    });
  
    test('throws an error if the string is empty', () => {
      expect(() => stringLength('')).toThrow('String must be at least 1 character long');
    });
  
    test('throws an error if the string is longer than 10 characters', () => {
      expect(() => stringLength('12345678901')).toThrow('String cannot be longer than 10 characters');
    });
  
    test('returns the length of a string with length 1', () => {
      expect(stringLength('a')).toBe(1);
    });
  
    test('returns the length of a string with length 10', () => {
      expect(stringLength('1234567890')).toBe(10);
    });
  
    test('throws an error if the string is longer than 10 characters', () => {
      expect(() => stringLength('12345678901')).toThrow('String cannot be longer than 10 characters');
      expect(() => stringLength('123456789011')).toThrow('String cannot be longer than 10 characters');
    });
}); 
  
describe('reverseString', () => {
    test('reverses a string', () => {
      expect(reverseString('hello')).toBe('olleh');
      expect(reverseString('12345')).toBe('54321');
      expect(reverseString('')).toBe('');
      expect(reverseString(' ')).toBe(' ');
      expect(reverseString('a')).toBe('a');
    });
});

const calc = new Calculator();

describe("Tests for the add() method", () => {
  it("should return the correct sum of two positive numbers", () => {
    expect(calc.add(2, 3)).toEqual(5);
  });

  it("should return zero when adding zero to any number", () => {
    expect(calc.add(0, 10)).toEqual(0);
  });

  it("should return the correct sum of a positive and a negative number", () => {
    expect(calc.add(-2, 5)).toEqual(3);
  });
});

describe("Tests for the subtract() method", () => {
  it("should return the correct difference between two positive numbers", () => {
    expect(calc.subtract(10, 3)).toEqual(7);
  });

  it("should return zero when subtracting a number from itself", () => {
    expect(calc.subtract(-5, -5)).toEqual(0);
  });

  it("should return the correct difference between a positive and a negative number", () => {
    expect(calc.subtract(2, 5)).toEqual(-3);
  });
});

describe("Tests for the divide() method", () => {
  it("should return the correct quotient of two positive numbers", () => {
    expect(calc.divide(10, 2)).toEqual(5);
  });

  it("should return zero when dividing zero by any number", () => {
    expect(calc.divide(0, 1)).toEqual(0);
  });

  it("should return NaN when dividing a number by zero", () => {
    expect(calc.divide(2, 0)).toBeNaN();
  });
});

describe("Tests for the multiply() method", () => {
  it("should return the correct product of two positive numbers", () => {
    expect(calc.multiply(2, 3)).toEqual(6);
  });

  it("should return zero when multiplying any number by zero", () => {
    expect(calc.multiply(0, 10)).toEqual(0);
  });

  it("should return the correct product of two negative numbers", () => {
    expect(calc.multiply(-2, -3)).toEqual(6);
  });
});

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  describe('capitalize', () => {
    test('capitalizes the first character of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
      expect(capitalize('tEst')).toBe('Test');
    });
  
    test('returns an empty string if given an empty string', () => {
      expect(capitalize('')).toBe('');
    });
  
    test('returns the same string if the first character is already capitalized', () => {
      expect(capitalize('Hello')).toBe('Hello');
      expect(capitalize('TEST')).toBe('TEST');
    });
});
  


function stringLength(str) {
    return str.length;
}

function reverseString(string) {
    return string.split('').reverse().join('');
}

class Calculator {
    add(x, y) {
      return x + y;
    }
  
    subtract(x, y) {
      return x - y;
    }
  
    divide(x, y) {
      if (y === 0) {
        throw new Error("Cannot divide by zero");
      }
      return x / y;
    }
  
    multiply(x, y) {
      return x * y;
    }
  }
  
  
  