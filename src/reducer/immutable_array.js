/**
 * 对数组进行不可变操作
 */

// 添加一个新元素
export const addArrayReducer = (array, data) => {
  return array.concat(data);
};

// 删除一项
export const deleteArrayReducer = (array, index) => {
  return [
    ...array.slice(0, index),
    ...array.slice(index + 1),
  ];
};

// 修改一项
export const updateArrayReducer = (array, index, data) => {
  return [
    ...array.slice(0, index),
    data,
    ...array.slice(index + 1),
  ];
};