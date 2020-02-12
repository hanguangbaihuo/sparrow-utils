import subtract from './subtract';

describe('减法函数测试', () => {
  test('0.1 - 0.2 = -0.1', () => {
    expect(subtract(0.1, 0.2)).toEqual(-0.1);
  });

  test('1.1 - (-1.23) = 2.33', () => {
    expect(subtract(1.1, -1.23)).toEqual(2.33);
  });

  test('5 - 2.3456 = 2.6544', () => {
    expect(subtract(5, 2.3456)).toEqual(2.6544);
  });

  test('a - 6 = NaN', () => {
    expect(subtract('a', 6)).toBeNaN();
  });
});
