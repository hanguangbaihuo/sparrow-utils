import toInteger from './toInteger';

describe('整数转换函数测试', () => {
  test('参数是非数字', () => {
    expect(toInteger('a')).toEqual({
      times: 0,
      int: 0,
    });
  });

  test('参数是整数', () => {
    expect(toInteger(10)).toEqual({
      times: 1,
      int: 10,
    });
  });

  test('参数是小数', () => {
    expect(toInteger(10.2345)).toEqual({
      times: 10000,
      int: 102345,
    });
  });

  test('参数是负数数', () => {
    expect(toInteger(-10.2345)).toEqual({
      times: 10000,
      int: -102345,
    });
  });
});
