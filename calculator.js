class Calculator {
  add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      return NaN;
    }
    return x + y;
  }


  subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a - b;
  }

  multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a * b;
  }

  divide(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return NaN;
    }
      
    const result = num1 / num2;
      
    if (result === Infinity || result === -Infinity) {
      return result;
    } else {
      return Number(result.toFixed(2));
    }
  }  
  
}

module.exports = Calculator;
