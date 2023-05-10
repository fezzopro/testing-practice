import calculator from '../modules/calculator.js';
describe('Calculator module Test suit', () => {
  test('add', () => {
    const newAdd = () => { calculator.add('r', 4); };

    expect(newAdd).toThrow(new Error('Invalid Number'));
    expect(calculator.add(5, 4)).toBe(9);

  });
  
  test('subtract', () => {
    const newSubstract = () => { calculator.subtract('r', 4); };

    expect(newSubstract).toThrow(new Error('Invalid Number'));
    expect(calculator.subtract(5, 4)).toBe(1);
  });

  test('divide', () => {
    const newDivide = () => { calculator.divide('r', 4); };

    expect(newDivide).toThrow(new Error('Invalid Number'));
    expect(calculator.multiply(5, 4)).toBe(20);
  });

  test('multiply', () => {
    const newMultiply = () => { calculator.multiply('r', 4); };

    expect(newMultiply).toThrow(new Error('Invalid Number'));
    expect(calculator.divide(5, 4)).toBe(1.25);
  });
});