import multiply from './multiply';

describe('乘法函数测试', () => {
  test('0.1 * 0.2 = 0.0', () => {
    expect(multiply(0.1, 0.2)).toEqual(0.0);
  });

  test('1.1 * (-2.22) = -2.44', () => {
    expect(multiply(1.1, -2.22)).toEqual(-2.44);
  });

  test('5 + 6.0 = 30.0', () => {
    expect(multiply(5, 6.0)).toEqual(30.0);
  });

  test('a * 6 = NaN', () => {
    expect(multiply('a', 6)).toBeNaN();
  });
});
