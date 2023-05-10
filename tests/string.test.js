import stringLength from '../modules/string';

describe('', () => {
  test('string length', () => {
    expect(stringLength('kamana')).toBe(6);
    expect(stringLength('fear')).toBe(4);
    expect(stringLength('kamana')).not.toBe(8);
  });

  test('String less than 1 character', () => {
    const newStringLength = () => {
      stringLength('');
    };
    expect(newStringLength).toThrow(new Error('invalid'));
  });

  test('String greater than 10 character', () => {
    const newStringLength = () => {
      console.log(stringLength('1234567890-'));
    };
    expect(newStringLength).toThrow(new Error('invalid'));
  });
});