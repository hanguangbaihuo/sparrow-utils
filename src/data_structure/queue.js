// 队列
import DoublyLinkedList from './doubly_linked_list';

class Queue {
  #data = new DoublyLinkedList();
  constructor() { }

  size() {
    return this.#data.size();
  }

  get length() {
    return this.size();
  }

  clear() {
    this.#data.clear();
  }

  isEmpty() {
    return this.size() === 0;
  }

  // 获取队首元素
  getHead() {
    return this.#data.getFirstElement();
  }

  // 入队
  enQueue(element) {
    this.#data.push(element);
  }

  enQueueArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.enQueue(arr[i]);
    }
  }

  // 出队
  deQueue() {
    return this.#data.removeHead();
  }

  toArray() {
    return this.#data.toArray();
  }

  toString() {
    return this.#data.toString();
  }
}

export default Queue;
