import reverseString from '../modules/reverseString.js';

describe('Reverse String Test Suit', () => {
  test('reverseString', () => {
    expect(reverseString('kamana')).toBe('anamak');
  });
});