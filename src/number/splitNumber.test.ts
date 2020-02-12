import splitNumber from './splitNumber';

describe('数字分割函数测试', () => {
  test('2.345小数点前是2', () => {
    expect(splitNumber(2.345)[0]).toEqual('2');
  });
  test('2.345小数点后是345', () => {
    expect(splitNumber(2.345)[1]).toEqual('345');
  });
  test('2小数点前是2', () => {
    expect(splitNumber(2)[0]).toEqual('2');
  });
  test('2小数点后是undefined', () => {
    expect(splitNumber(2)[1]).toBeUndefined();
  });
});
