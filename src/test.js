/**
 * 延时函数
 */

function initPromise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time, 'success');
  });
}

async function delay(time, fn) {
  const promiseDelay = new Promise((resolve, reject) => {
    setTimeout(resolve, time, 'success');
  });
  await promiseDelay;
  fn();
}

delay(3000, () => {
  console.log(222);
});
console.log(11111);
