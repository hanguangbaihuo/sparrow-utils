// 队列测试
import Queue from './queue';

describe('队列测试', () => {
  let queue = new Queue();

  test('初始化', () => {
    expect(queue.size()).toBe(0);
    expect(queue.length).toBe(0);
    expect(queue.getHead()).toBeUndefined();
  });

  test('入队', () => {
    queue.enQueueArray([0, 1, 2, 3, 4, 5]);
    expect(queue.size()).toBe(6);
    expect(queue.length).toBe(6);
    expect(queue.getHead()).toBe(0);
    expect(queue.length).toBe(6);
  });

  test('出队', () => {
    expect(queue.deQueue()).toBe(0);
    expect(queue.length).toBe(5);
    expect(queue.getHead()).toBe(1);
    expect(queue.size()).toBe(5);
    expect(queue.toString()).toBe('1,2,3,4,5');
  });

  test('清空队列', () => {
    queue.clear();
    expect(queue.size()).toBe(0);
    expect(queue.getHead()).toBeUndefined();
    expect(queue.toString()).toBe('');
  });
});
