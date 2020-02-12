import getDigitsOfValue from './getDigitsOfValue';

describe('测试获取一个值的小数位数', () => {
  test('1.234有3位小数', () => {
    expect(getDigitsOfValue(1.234)).toEqual(3);
  });

  test('5有0位小数', () => {
    expect(getDigitsOfValue(5)).toEqual(0);
  });

  test('-2.34有2位小数', () => {
    expect(getDigitsOfValue(-2.34)).toEqual(2);
  });

  test('a是无效输入', () => {
    expect(getDigitsOfValue('a')).toEqual(-1);
  });
});
