class Calculator {
  add(a, b) {
    if (isNaN(a.valueOf()) || isNaN(b.valueOf())) {
      throw new Error('Invalid Number');
    }
    return Number.parseInt(a) + Number.parseInt(b);
  }
  subtract(a, b) {
    if (isNaN(a.valueOf()) || isNaN(b.valueOf())) {
      throw new Error('Invalid Number');
    }
    return Number.parseInt(a) - Number.parseInt(b);
  }
  divide(a, b) {
    if (isNaN(a.valueOf()) || isNaN(b.valueOf())) {
      throw new Error('Invalid Number');
    }
    return Number.parseInt(a) / Number.parseInt(b);
  }
  multiply(a, b) {
    if (isNaN(a.valueOf()) || isNaN(b.valueOf())) {
      throw new Error('Invalid Number');
    }
    return Number.parseInt(a) * Number.parseInt(b);
  }
}

export default new Calculator();