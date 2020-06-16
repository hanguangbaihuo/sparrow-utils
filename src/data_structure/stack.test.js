// 栈测试
import Stack from './stack';

describe('栈的测试', () => {

  test('栈的初始化', () => {
    let stack = new Stack();
    expect(stack.size()).toBe(0);
    expect(stack.getTop()).toBeUndefined();
    expect(stack.pop()).toBeUndefined();
  });

  test('入栈', () => {
    let stack = new Stack();
    stack.push(0);

    expect(stack.size()).toBe(1);
    expect(stack.getTop()).toBe(0);
    stack.push(1);
    expect(stack.size()).toBe(2);
    expect(stack.getTop()).toBe(1);
  });

  test('出栈', () => {
    let stack = new Stack();
    stack.push(0);
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size()).toBe(4);
    expect(stack.getTop()).toBe(3);

    expect(stack.pop()).toBe(3);
    expect(stack.size()).toBe(3);
    expect(stack.getTop()).toBe(2);
  });

  test('清空栈', () => {
    let stack = new Stack();
    stack.push(0);
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size()).toBe(4);
    expect(stack.getTop()).toBe(3);
    expect(stack.toString()).toBe('3,2,1,0');

    stack.clear();
    expect(stack.size()).toBe(0);
    expect(stack.getTop()).toBeUndefined();
    expect(stack.toString()).toBe('');
  });

  test('最大长度栈测试', () => {
    let stack = new Stack(10);
    stack.pushArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    expect(stack.size()).toBe(10);
    expect(stack.getTop()).toBe(9);

    stack.push(10);
    expect(stack.size()).toBe(10);
    expect(stack.getTop()).toBe(10);

    stack.pushArray([11, 12, 13, 14, 15]);
    expect(stack.size()).toBe(10);
    expect(stack.getTop()).toBe(15);

    expect(stack.toString()).toBe('15,14,13,12,11,10,9,8,7,6');
  });
});

