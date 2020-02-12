import isInteger from './isInteger';

describe('是否是整数', () => {
  test('10是整数', () => {
    expect(isInteger(10)).toBeTruthy();
  });
  test('-10是整数', () => {
    expect(isInteger(-10)).toBeTruthy();
  });
  test('1.2不是整数', () => {
    expect(isInteger(1.2)).toBeFalsy();
  });

  test('a不是整数', () => {
    expect(isInteger('a')).toBeFalsy();
  });
});
