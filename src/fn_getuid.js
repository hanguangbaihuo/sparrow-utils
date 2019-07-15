/**
 * 获取UID
 * 
 * @author minghua
 * @date   2019-07-12
 */

// 获取此时的毫秒数
const now = Date.now();
// const now = + new Date();
let index = 0;

// 每次调用index都加1
function getUid() {
  return `sparrow-uid-${now}-${++index}`;
}

export default getUid;