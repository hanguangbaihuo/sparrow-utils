import delay from './delay';

test('return 12 after 1s', async () => {
  // 这里模拟setTimeout
  jest.useFakeTimers();
  const testFunc = () => 12;
  const delayedTestFunc = delay(testFunc, 1000);
  expect.assertions(3);

  const pro = delayedTestFunc();
  // 这个模拟过了时间
  jest.runAllTimers();
  const res = await pro;

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  expect(res).toEqual(12);
});
