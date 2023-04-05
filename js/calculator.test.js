const Calculator = require('../js/calculator');

describe('Calculator', () => {
  const calculator = new Calculator();

  describe('Add method', () => {
    test('should return the correct sum of two numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.add(10, -5)).toBe(5);
      expect(calculator.add(0, 0)).toBe(0);
    });

    test('should return NaN if one or both inputs are not numbers', () => {
      expect(calculator.add(2, '3')).toBeNaN();
      expect(calculator.add('10', -5)).toBeNaN();
      expect(calculator.add('abc', 'def')).toBeNaN();
    });

    test('should return Infinity if one or both inputs are Infinity', () => {
      expect(calculator.add(Infinity, 3)).toBe(Infinity);
      expect(calculator.add(10, Infinity)).toBe(Infinity);
      expect(calculator.add(Infinity, Infinity)).toBe(Infinity);
    });
  });

  describe('Subtract method', () => {
    test('should return the correct difference of two numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
      expect(calculator.subtract(10, -5)).toBe(15);
      expect(calculator.subtract(0, 0)).toBe(0);
    });

    test('should return NaN if one or both inputs are not numbers', () => {
      expect(calculator.subtract(2, '3')).toBeNaN();
      expect(calculator.subtract('10', -5)).toBeNaN();
      expect(calculator.subtract('abc', 'def')).toBeNaN();
    });

    test('should return Infinity if one or both inputs are Infinity', () => {
      expect(calculator.subtract(Infinity, 3)).toBe(Infinity);
      expect(calculator.subtract(10, -Infinity)).toBe(Infinity);
      expect(calculator.subtract(Infinity, Infinity)).toBeNaN();
    });
  });

  describe('Multiply method', () => {
    test('should return the correct product of two numbers', () => {
      expect(calculator.multiply(5, 3)).toBe(15);
      expect(calculator.multiply(10, -5)).toBe(-50);
      expect(calculator.multiply(0, 0)).toBe(0);
    });

    test('should return NaN if one or both inputs are not numbers', () => {
      expect(calculator.multiply(2, '3')).toBeNaN();
      expect(calculator.multiply('10', -5)).toBeNaN();
      expect(calculator.multiply('abc', 'def')).toBeNaN();
    });

    test('should return Infinity or -Infinity if one or both inputs are Infinity', () => {
      expect(calculator.multiply(Infinity, 3)).toBe(Infinity);
      expect(calculator.multiply(10, -Infinity)).toBe(-Infinity);
      expect(calculator.multiply(Infinity, Infinity)).toBe(Infinity);
    });
  });

  describe('Divide method', () => {
    test('should return the correct quotient of two numbers', () => {
      expect(calculator.divide(6, 3)).toBe(2);
      expect(calculator.divide(10, -5)).toBe(-2);
    });
  
    test('should return NaN if one or both inputs are not numbers', () => {
      expect(calculator.divide(2, '3')).toBeNaN();
      expect(calculator.divide('10', -5)).toBeNaN();
      expect(calculator.divide('abc', 'def')).toBeNaN();
    });
  
    test('should return Infinity or -Infinity if one or both inputs are Infinity', () => {
      expect(calculator.divide(Infinity, 3)).toBe(Infinity);
      expect(calculator.divide(10, -Infinity)).toBe(0);
      expect(calculator.divide(Infinity, Infinity)).toBe(NaN);
    });
  });
  

});
