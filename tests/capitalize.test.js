import capitalized from "../modules/capitalize";

describe('Capitalized test suit', () => {
  test('empty string', () => {
    const newString = () => {
      capitalized('');
    };
    expect(newString).toThrow(new Error('Empty String'));
  });

  test('capitalize', () => {
    expect(capitalized('kamana')).toBe('Kamana');
  });
});