import toFixed from './toFixed';

describe('toFixed函数测试', () => {
  test('待处理数字不是数值类型', () => {
    expect(toFixed('a', 1)).toBeNaN();
  });
  test('位数不是数值类型', () => {
    expect(toFixed(1.2, 'b')).toBeNaN();
  });
  test('位数不是整数', () => {
    expect(toFixed(1.2, 1.2)).toBeNaN();
  });
  test('位数不是正数', () => {
    expect(toFixed(1.2, -2)).toBeNaN();
  });
  test('位数大于待处理数字小数位数', () => {
    expect(toFixed(2.3, 5)).toEqual(2.30000);
  });
  test('位数小于待处理数字的小数位数', () => {
    expect(toFixed(2.456789, 3)).toEqual(2.457);
  });
  test('遇到5的四舍五入的测试', () => {
    expect(toFixed(2.456789, 2)).toEqual(2.46);
  });
  test('小于5的四舍五入的测试', () => {
    expect(toFixed(2.456789, 0)).toEqual(2);
  });
  test('负数遇到5的测试', () => {
    expect(toFixed(-2.456789, 1)).toEqual(-2.5);
  });
  test('负数大于5的四舍五入测试', () => {
    expect(toFixed(-2.456789, 2)).toEqual(-2.46);
  });

  test('负数小于5的四舍五入测试', () => {
    expect(toFixed(-2.456789, 0)).toEqual(-2);
  });
});
