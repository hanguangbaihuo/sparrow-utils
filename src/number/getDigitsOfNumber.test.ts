import getDigitsOfNumber from './getDigitsOfNumber';

describe('测试获取一个数字的小数位数', () => {
  test('1.234有3位小数', () => {
    expect(getDigitsOfNumber(1.234)).toEqual(3);
  });

  test('5有0位小数', () => {
    expect(getDigitsOfNumber(5)).toEqual(0);
  });

  test('-2.34有2位小数', () => {
    expect(getDigitsOfNumber(-2.34)).toEqual(2);
  });
});
