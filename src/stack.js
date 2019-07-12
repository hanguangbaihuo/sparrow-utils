/**
 * 栈
 * 
 * @author minghua
 * @date   2019-07-12
 */

class Stack {

  constructor(maxLength = -1) {
    // 用数组存储栈中的数据
    this.items = [];
    // 栈的最大长度，超出长度时会删除栈底元素；默认不删除栈底元素。
    this.maxLength = maxLength; // 默认值为 -1 ，请传入 >= 1 的值
  }

  // 添加一个或几个新元素到栈顶
  push(element) {
    const stackSize = this.size();
    // 如果栈中数据大于等于最大长度时，删除栈底元素
    if (this.maxLength > 0 && stackSize >= this.maxLength) {
      // 从数组中删除第一个元素，并返回该元素的值，次方法更改数组的长度
      this.items.shift();
    }
    this.items.push(element);
  }

  // 移除栈顶的元素，同时返回被移除的元素
  pop() {
    // 从数组中删除最后一个元素，并返回该元素的值。次方法更改数组的长度。
    return this.items.pop();
  }

  // 查看栈顶元素
  peek() {
    return this.items[this.items.length - 1];
  }

  // 检查栈是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 清空栈元素
  clear() {
    this.items = [];
  }

  // 返回栈的长度
  size() {
    return this.items.length;
  }

  // 打印栈元素
  print() {
    console.log(this.items.toString());
  }

  // 返回新数组
  toArray() {
    return this.items.slice();
  }
}

export default Stack;
