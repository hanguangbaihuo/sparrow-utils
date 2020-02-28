import defaultEquals from './default_equals';

// 测试函数 defaultEquals
describe('defaultEquals', () => {
  test('相等测试', () => {
    // test undefined equals undefined
    expect(defaultEquals(undefined, undefined)).toBe(true);
    // test null equals null
    expect(defaultEquals(null, null)).toBe(true);
    // test true equals true
    expect(defaultEquals(true, true)).toBe(true);
    // test false equals false
    expect(defaultEquals(false, false)).toBe(true);
    // test string equality
    expect(defaultEquals('aaa', 'aaa')).toBe(true);
    expect(defaultEquals('', '')).toBe(true);
    // test numbers are equal
    expect(defaultEquals(0, 0)).toBe(true);
    expect(defaultEquals(+0, +0)).toBe(true);
    expect(defaultEquals(-0, -0)).toBe(true);
    expect(defaultEquals(NaN, NaN)).toBe(true);
    expect(defaultEquals(12, 12)).toBe(true);
    // test objects equal
    const c = { a: 1, b: 2 };
    const a = c;
    const b = c;
    expect(defaultEquals(a, b)).toBe(true);
  });

  test('不相等测试', () => {
    // Test that undefined is not equal to null
    expect(defaultEquals(undefined, null)).toBe(false);
    // Test empty string is not equal to false
    expect(defaultEquals('', false)).toBe(false);
    // Test that the number zero is not equal to false
    expect(defaultEquals(0, false)).toBe(false);
    // Test that +0 and -0 are not equal
    expect(defaultEquals(0, -0)).toBe(false);
    // Test that number 1 and string 1 are not equal
    expect(defaultEquals('1', 1)).toBe(false);
    // Test that number 1 and true are not equal
    expect(defaultEquals(1, true)).toBe(false);
  });
});
