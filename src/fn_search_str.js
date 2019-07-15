/**
 * 前端搜索
 * 
 * @author minghua
 * @date   2019-07-12
 *
 * 搜索范围：
 * 传入的数组
 *
 * 搜索规则：
 * 1、当str搜索词完全命中时权重 +100
 * 2、开始位置命中时权重 +10
 * 3、中间或者结尾位置命中时权重 +1
 *
 * 排序：
 * 按权重值倒序
 */

/**
 * 搜索函数
 * @param data array 需要搜索的数据
 * @param str  string 搜索关键词
 * 
 * @return array
 */
const search = (data, str) => {

  // 未传入或传入的数组无内容时，返回空数组作为搜索结果
  if (!data || data.length <= 0) {
    return [];
  }

  // 搜索字符串去除收尾空格并转为小写
  let searchStr = str.trim().toLowerCase();
  // 初始化搜索结果为空数组
  let searchResult = [];

  // 如果不存在搜索词 str 或者搜索词为空时返回data数组
  if (!str || searchStr.length === 0) {
    return data;
  }

  // 开始搜索
  data.forEach(item => {
    // 设置排序权重
    let weight = 0;

    // 搜索数组中的对象必须具备searchList字段
    // 针对这个字段进行搜索
    item.searchList.forEach(searchItem => {
      // 搜索列表每项都转为小写
      searchItem = searchItem.toLowerCase();
      // 其中之一完全命中时权重 + 100
      if (searchStr == searchItem) {
        weight += 100;
      } else {
        const index = searchItem.indexOf(searchStr);
        // 开始命中时权重 + 10
        if (index === 0) {
          weight += 10;
        }
        // 中间或者结尾命中时权重 + 1
        else if (index > 0) {
          weight += 1;
        }
        // 未命中时不增加权重
        else {
          weight += 0;
        }
      }
    });

    // 权重为 0 时，表示没有被命中，不放入搜索结果集中
    if (weight > 0) {
      item.searchWeight = weight;
      searchResult.push(item);
    }
  });

  // 排序 - 按权重倒序
  searchResult.sort((a, b) => {
    return b.searchWeight - a.searchWeight;
  });

  return searchResult;
};

export default search;
