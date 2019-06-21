/**
 * 对象进行不可变操作
 */

// 增加一项
export const addObjectReducer = (obj, data) => {
  return {
    ...obj,
    data,
  };
};

// 删除一项
export const deleteObjectReducer = (obj, key) => {
  Object.keys(obj).reduce((item, itemKey) => {
    if (itemKey !== key) {
      return {
        ...item,
        [itemKey]: obj[itemKey],
      };
    }
    return item;
  }, {});
};

// 修改一项
export const updateObjectReducer = (obj, actionObj) => {
  return {
    ...obj,
    ...actionObj,
  };
};