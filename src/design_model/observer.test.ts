import observer from './observer';

// 测试观察者模式
describe('test observer', () => {
  let i = 0;

  function fn1() {
    return i++;
  }

  function fn2() {
    return 2;
  }

  observer.register('a', fn1);
  observer.register('a', fn2);
  observer.register('a', fn1);
  observer.register('a', fn2);

  test('a事件的函数队列长度为4', () => {
    expect(observer.getMessage().a).toHaveLength(4);
  });

  observer.register('b', fn1);
  observer.register('b', fn2);
  observer.register('b', fn1);
  observer.register('b', fn2);
  observer.remove('b', fn1);
  test('b事件remote', () => {
    expect(observer.getMessage().b).toHaveLength(2);
  });

  observer.register('c', fn1);
  observer.trigger('c');
  test('函数返回值为1', () => {
    expect(i).toBe(1);
  });

  observer.remove('c', fn1);
  observer.register('c', fn2);
});
