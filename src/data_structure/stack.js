// 栈
import DoublyLinkedList from './doubly_linked_list';

class Stack {
  // 存储栈的数据
  #data = new DoublyLinkedList();

  // 构造函数，传入栈的最大长度，默认 -1 不限制最大长度
  constructor(maxLength = -1) {
    this._maxLength = maxLength;
  }

  // 栈的长度
  size() {
    return this.#data.size();
  }

  // 栈的长度
  get length() {
    return this.size();
  }

  // 清空栈
  clear() {
    this.#data.clean();
  }

  // 判断栈是否为空
  isEmpty() {
    return this.size() === 0;
  }

  // 获取栈顶元素值
  getTop() {
    return this.#data.getFirstElement();
  }

  // 入栈
  push(element) {
    this.#data.addHead(element);
    // _maxLength === -1 时，没有最大长度限制
    // _maxLength !== -1 并且 栈长度大于最大长度限制时，移除栈底元素
    if (this._maxLength !== -1 && this.size() > this._maxLength) {
      this.#data.removeTail();
    }
  }

  pushArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.push(arr[i]);
    }
  }

  // 出栈
  pop() {
    return this.#data.removeHead();
  }

  toArray() {
    return this.#data.toArray();
  }

  toString() {
    return this.#data.toString();
  }
}

export default Stack;
