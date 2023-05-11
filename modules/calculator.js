class Calculator {
  constructor() {
    this.results = 0;
  }

  add(a, b) {
    if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
      throw new Error('Invalid Number');
    }
    this.results = Number.parseInt(a, 10) + Number.parseInt(b, 10);
    return this.results;
  }

  subtract(a, b) {
    if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
      throw new Error('Invalid Number');
    }
    this.results = Number.parseInt(a, 10) - Number.parseInt(b, 10);
    return this.results;
  }

  divide(a, b) {
    if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
      throw new Error('Invalid Number');
    }
    this.results = Number.parseInt(a, 10) / Number.parseInt(b, 10);
    return this.results;
  }

  multiply(a, b) {
    if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
      throw new Error('Invalid Number');
    }
    this.results = Number.parseInt(a, 10) * Number.parseInt(b, 10);
    return this.results;
  }
}
export default new Calculator();