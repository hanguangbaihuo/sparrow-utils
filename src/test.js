
// 将元素移动到指定位置的后边
const moveToAfterReducer = (array, index, toIndex) => {
  if (index >= 0 && index < array.length && toIndex >= 0 && toIndex < array.length) {
    if (index > toIndex) {
      return [
        ...array.slice(0, toIndex),
        array[toIndex],
        array[index],
        ...array.slice(toIndex + 1, index),
        ...array.slice(index + 1),
      ];
    } else {
      return [
        ...array.slice(0, index),
        ...array.slice(index + 1, toIndex),
        array[toIndex],
        array[index],
        ...array.slice(toIndex + 1),
      ];
    }
  }
  return [...array];
};
/**
 * 批量移动数组的指定元素到指定位置
 * 
 * @param {Array} array 源数组
 * @param {Array} indexArr 需要移动的元素下标组成的数组
 * @param {number} toIndex 要移动到的位置
 * 
 * @return array 返回一个新数组
 */
const batchMobile = (array = [], indexArr = [], toIndex) => {
  // 将要移动的元素组合成数组
  const batchArr = indexArr.map(item => {
    return array[item];
  });

  // 过滤掉所有被移动元素，返回新数组
  const sourceArray = array.filter((item, index) => {
    return indexArr.indexOf(index) === -1;
  });

  // toIndex <= -1 时，批量移动到数组顶部
  if (toIndex <= -1) {
    return [
      ...batchArr,
      ...sourceArray,
    ];
  }

  // toIndex >= array.length 时，批量移动到数组尾部
  if (toIndex >= array.length) {
    return [
      ...sourceArray,
      ...batchArr,
    ];
  }

  // 当 0 <= toIndex < array.length 时，进行如下移动
  // 重新设置目标位置
  // 被移动元素的下标有几个小于 toIndex 的值
  let i = 0;
  indexArr.forEach((item) => {
    if (item < toIndex) {
      i++;
    }
  });
  // toIndex - i 即为新数组中目标元素的位置
  toIndex = toIndex - i;

  // 在新数组的新位置上组合两个数组
  return [
    ...sourceArray.slice(0, toIndex + 1),
    ...batchArr,
    ...sourceArray.slice(toIndex + 1, sourceArray.length),
  ];

};

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arrAfter1 = moveToAfterReducer(arr, 2, 5);
// const arrAfter2 = moveToAfterReducer(arrAfter1, 5, 2);
const batchMobileArr1 = batchMobile(arr, [3, 4, 5], 7);
const batchMobileArr2 = batchMobile(arr, [3, 4, 8], 6);
const batchMobileArr3 = batchMobile(arr, [3, 4, 8], -2);
const batchMobileArr4 = batchMobile(arr, [3, 4, 8], 11);

console.log(batchMobileArr1, batchMobileArr2, batchMobileArr3, batchMobileArr4);