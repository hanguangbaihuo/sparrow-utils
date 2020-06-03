import add from './add';

describe('加法函数测试', () => {
  test('0.1 + 0.2 = 0.3', () => {
    expect(add(0.1, 0.2)).toEqual(0.3);
  });

  test('1.1 + (-1.23) = -0.13', () => {
    expect(add(1.1, -1.23)).toEqual(-0.13);
  });

  test('5 + 2.3456 = 7.3456', () => {
    expect(add(5, 2.3456)).toEqual(7.3456);
  });

  test('a + 6 = NaN', () => {
    expect(add('a', 6)).toBeNaN();
  });
});
