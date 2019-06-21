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
