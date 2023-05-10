import reverseString from "../modules/reverseString";

describe('Reverse String Test Suit', () => {
  test('reverseString', () => {
    expect(reverseString('kamana')).toBe('anamak');
  });
});