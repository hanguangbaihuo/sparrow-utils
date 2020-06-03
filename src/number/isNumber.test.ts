import isNumber from './isNumber';

describe('是否是数字', () => {
  test('10是数字', () => {
    expect(isNumber(10)).toBeTruthy();
  });
  test('-10是数字', () => {
    expect(isNumber(-10)).toBeTruthy();
  });
  test('1.2是数字', () => {
    expect(isNumber(1.2)).toBeTruthy();
  });

  test('a不是数字', () => {
    expect(isNumber('a')).toBeFalsy();
  });
});
