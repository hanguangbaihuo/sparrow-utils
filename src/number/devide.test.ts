import devide from './devide';

describe('除法函数测试', () => {
  test('0.1 / 0.25 = 0.40', () => {
    expect(devide(0.1, 0.25)).toEqual(0.40);
  });

  test('0.1 / (-0.2) = -0.5', () => {
    expect(devide(0.1, -0.2)).toEqual(-0.5);
  });

  test('5 / 6 = 0', () => {
    expect(devide(5, 6)).toEqual(1);
  });

  test('a + 6 = NaN', () => {
    expect(devide('a', 6)).toBeNaN();
  });
});
