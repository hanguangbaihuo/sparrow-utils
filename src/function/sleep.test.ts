import sleep from './sleep';

jest.useFakeTimers();

test('waits 1 second before continuing', () => {
  sleep(1000);
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
