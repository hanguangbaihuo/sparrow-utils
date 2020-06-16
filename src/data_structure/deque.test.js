// 双端队列测试
import Deque from './deque';

describe('队列测试', () => {
  let deque = new Deque();

  test('初始化', () => {
    expect(deque.size()).toBe(0);
    expect(deque.length).toBe(0);
    expect(deque.peekHead()).toBeUndefined();
    expect(deque.peekTail()).toBeUndefined();
  });

  test('入队', () => {
    deque.addTailArray([0, 1, 2, 3, 4, 5]);
    expect(deque.size()).toBe(6);
    expect(deque.length).toBe(6);
    expect(deque.peekHead()).toBe(0);
    expect(deque.peekTail()).toBe(5);
    expect(deque.length).toBe(6);
  });

  test('出队', () => {
    expect(deque.removeHead()).toBe(0);
    expect(deque.length).toBe(5);
    expect(deque.peekHead()).toBe(1);
    expect(deque.size()).toBe(5);
    expect(deque.toString()).toBe('1,2,3,4,5');

    expect(deque.removeTail()).toBe(5);
    expect(deque.length).toBe(4);
    expect(deque.peekTail()).toBe(4);
    expect(deque.size()).toBe(4);
    expect(deque.toString()).toBe('1,2,3,4');
  });

  test('清空队列', () => {
    deque.clear();
    expect(deque.size()).toBe(0);
    expect(deque.peekHead()).toBeUndefined();
    expect(deque.peekTail()).toBeUndefined();
    expect(deque.toString()).toBe('');
  });
});

