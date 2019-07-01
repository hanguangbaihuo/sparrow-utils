/**
 * 数组的一些操作
 * 
 * 此页的所有方法都返回新数组，不会改变原数组。
 */

/**
 * 添加一个新元素
 * @param {array} array 原数组
 * @param {*} data 要添加的数据
 * @returns array 返回一个新数组
 */
export const addArrayReducer = (array, data) => {
  return array.concat(data);
};

// 删除一项
export const deleteArrayReducer = (array, index) => {
  return [...array.slice(0, index), ...array.slice(index + 1)];
};

// 修改一项
export const updateArrayReducer = (array, index, data) => {
  return [...array.slice(0, index), data, ...array.slice(index + 1)];
};

// 向上移动一项
export const moveUpReducer = (array, index) => {
  if (index <= 0 || index > array.length - 1) {
    return [...array];
  }
  return [...array.slice(0, index - 1), array[index], array[index - 1], ...array.slice(index + 1)];
};

// 向下移动一行
export const moveDownReducer = (array, index) => {
  if (index < 0 || index >= array.length - 1) {
    return [...array];
  }
  return [...array.slice(0, index), array[index + 1], array[index], ...array.slice(index + 2)];
};

// 移动到顶部
export const moveTopReducer = (array, index) => {
  if (index < 0 || index >= array.length) {
    return [...array];
  }
  return [array[index], ...array.slice(0, index), ...array.slice(index + 1)];
};

// 移动到底部
export const moveBottomReducer = (array, index) => {
  if (index < 0 || index >= array.length) {
    return [...array];
  }
  return [...array.slice(0, index), ...array.slice(index + 1), array[index]];
};

// 将元素移动到指定位置的后边
export const moveToAfterReducer = (array, index, toIndex) => {
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

// 将元素移动到指定位置的前边
export const moveToBeforeReducer = (array, index, toIndex) => {
  if (index >= 0 && index < array.length && toIndex >= 0 && toIndex < array.length) {
    if (index > toIndex) {
      return [
        ...array.slice(0, toIndex),
        array[index],
        array[toIndex],
        ...array.slice(toIndex + 1, index),
        ...array.slice(index + 1),
      ];
    } else {
      return [
        ...array.slice(0, index),
        ...array.slice(index + 1, toIndex),
        array[index],
        array[toIndex],
        ...array.slice(toIndex + 1),
      ];
    }
  }
  return [...array];
};

/**
 * 插入数组，返回新数组
 * @param {array} array 要插入数据的数组
 * @param {int} index 数组下标
 * @param {*} data 要插入的数据
 * @param {*} type 在index之前还是之后插入数据，默认在index之后插入数据。
 *
 * @return array 返回新数组，不改变原数组
 */
export const insertArrayReducer = (array, index, data, type = 'after') => {
  if (type === 'after') {
    insertArrayReducerAfter(array, index, data);
  } else {
    insertArrayReducerBefore(array, index, data);
  }
};

// 在 index 之后插入数据
export const insertArrayReducerAfter = (array, index, data) => {
  return [...array.slice(0, index + 1), data, ...array.slice(index + 1)];
};

// 在 index 之前插入数据
export const insertArrayReducerBefore = (array, index, data) => {
  return [...array.slice(0, index), data, ...array.slice(index)];
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
export const batchMobile = (array = [], indexArr = [], toIndex) => {
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
