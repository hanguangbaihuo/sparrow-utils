// 双端队列
import DoublyLinkedList from './doubly_linked_list';

class Deque {
  // 私有属性 #data ，存储双端队列的数据。
  #data = new DoublyLinkedList();

  size() {
    return this.#data.size();
  }

  get length() {
    return this.size();
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.#data.clear();
  }

  toArray() {
    return this.#data.toArray();
  }

  toString() {
    return this.#data.toString();
  }

  // 在队头添加新元素
  addHead(element) {
    this.#data.addHead(element);
  }

  addHeadArray(arr) {
    for (let i = arr.length - 1; i >= 0; i++) {
      this.addHead(arr[i]);
    }
  }

  // 在队尾添加新元素
  addTail(element) {
    this.#data.push(element);
  }

  addTailArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.addTail(arr[i]);
    }
  }

  // 在队头移除元素
  removeHead() {
    return this.#data.removeHead();
  }

  // 在队尾移除元素
  removeTail() {
    return this.#data.removeTail();
  }

  // 查看队头元素
  peekHead() {
    return this.#data.getFirstElement();
  }

  // 查看队尾元素
  peekTail() {
    return this.#data.getLastElement();
  }
}

export default Deque;
