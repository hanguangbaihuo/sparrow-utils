/**
 * 判断两个对象是否相同
 * 
 * 不适用于复杂数据结构
 * 
 * @author minghua
 * @date 2019-07-03
 */

/*
 * 可判断如下结构
  {a: 1, b: 2}
  {a: 1, b: [1, 2]}
  {a: 1, b: {c: 1, d: 2}}
*/

/**
 * 判断两个对象是否相等
 * 
 * 注：此方法不支持复杂数据结构类型。
 */
export const isObjectEqual = function isObjectEqual(x, y) {

  // 两个对象必须有完全相同的原型链，我们能做的就是测试他们的构造函数。
  if (x.constructor !== y.constructor) {
    return false;
  }

  // 如果两个对象的key的长度不一样，返回false
  if (Object.keys(x).length !== Object.keys(y).length) {
    return false;
  }

  // x 对象的所有key的集合
  let xKeys = Object.keys(x);

  // 循环判断每个属性的值是否相等
  for (let p in xKeys) {

    p = xKeys[p];
    // 继承的属性已经通过 constructor 测试过
    // 当属性值设为 undefined 时，允许比较 x.p 和 y.p
    // 两个对象的 keys 长度相等，已经排除了一个对象属性值为 undefined，另一个对象无此属性的情况。不用再判断。
    // if (!y.hasOwnProperty(p)) {
    //   return false;
    // }

    // 如果 x.p === y.p，继续循环
    if (Object.is(x[p], y[p])) {
      continue;
    }

    // Numbers, Strings, Functions, Booleans 必须严格相等
    if (typeof x[p] !== 'object') {
      return false;
    }

    // 对象和数组进行递归判断
    if (!isObjectEqual(x[p], y[p])) {
      return false;
    }

  }

  return true;

};
