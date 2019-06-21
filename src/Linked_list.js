/**
 * js 实现的双向链表，简化版
 *
 * 注意：Node 节点只能存储可以用 Object.is(a, b) 判断是否相等的值类型。
 */

// 节点
class Node {
  constructor(data) {
    this.data = data;
  }
  next = null;
  prev = null;
}

// 链表类
class LinkedList {
  constructor() {
    this.initLinkedList();
  }

  // 清空链表
  clear() {
    this.initLinkedList();
  }

  initLinkedList() {
    this.head = new Node('head');
    this.tail = new Node('tail');
    this.length = 0;

    this.head.prev = null;
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.tail.next = null;
  }

  // 查找元素节点，没有元素时返回null
  find(value) {
    let currentNode = this.head;
    while (!Object.is(currentNode.data, value) && currentNode.next != null) {
      currentNode = currentNode.next;
    }
    if (currentNode === this.tail) {
      return null;
    }
    return currentNode;
  }

  // 显示链表的所有节点，包含头尾节点
  display() {
    let currentNode = this.head;
    while (!(currentNode == null)) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }

  // 查找链表中是否有相同节点值
  hasValue(value) {
    let currentNode = this.head;
    let result = false;

    for (let i = 0; i < this.length; i++) {
      currentNode = currentNode.next;
      if (Object.is(currentNode.data, value)) {
        result = true;
        break;
      }
    }
    return result;
  }

  // 获取链表长度
  getLength() {
    return this.length;
  }

  // 在链表头部插入节点，在 head 节点之后插入节点
  unshift(value) {
    let newNode = new Node(value);
    let current = this.head;
    let next = current.next;
    newNode.prev = current;
    newNode.next = next;
    current.next = newNode;
    next.prev = newNode;
    this.length++;
  }

  // 在链表尾部添加节点，在 tail 节点之后添加节点
  append(value) {
    let newNode = new Node(value);
    let current = this.tail;
    let prev = current.prev;
    newNode.prev = prev;
    newNode.next = current;
    current.prev = newNode;
    prev.next = newNode;
    this.length++;
  }

  // 在当前节点之后插入新节点
  insertAfter(value, newValue, callback) {
    let currentNode = this.find(value);
    let err = null;
    if (currentNode == null) {
      err = new Error(`未找到值为 ${value} 的节点`);
    } else {
      let newNode = new Node(newValue);
      let next = currentNode.next;
      newNode.prev = currentNode;
      newNode.next = next;
      currentNode.next = newNode;
      next.prev = newNode;
      this.length++;
    }
    callback && callback(err, value, currentNode);
  }

  // 在当前节点之前插入新节点
  insertBefore(value, newValue, callback) {
    let currentNode = this.find(value);
    let err = null;
    if (currentNode == null) {
      err = new Error(`未找到值为 ${value} 的节点`);
    } else {
      let newNode = new Node(newValue);
      let prev = currentNode.prev;
      newNode.prev = prev;
      newNode.next = currentNode;
      prev.next = newNode;
      currentNode.prev = newNode;
      this.length++;
    }
    callback && callback(err, value, currentNode);
  }

  // 删除一个节点
  delete(value, callback) {
    let current = this.find(value);
    let err = null;
    if (current == null) {
      err = new Error(`未找到值为 ${value} 的节点`);
    } else {
      let next = current.next;
      let prev = current.prev;
      next.prev = prev;
      prev.next = next;
      this.length--;
    }
    callback && callback(err, value, current);
  }

  moveTo(value, toValue, callback) {
    let err = null;
    let current = this.find(value);
    let toCurrent = this.find(toValue);
    if (current == null) {
      err = new Error(`未找到值为 ${value} 的节点`);
    } else if (toCurrent == null) {
      err = new Error(`未找到值为 ${toValue} 的节点`);
    } else {
      let currentPrev = current.prev;
      let currentNext = current.next;
      let toCurrentPrev = toCurrent.prev;
      let toCurrentNext = toCurrent.next;

      toCurrent.next = currentNext;
      toCurrent.prev = currentPrev;
      currentPrev.next = toCurrent;
      currentNext.prev = toCurrent;

      current.next = toCurrentNext;
      current.prev = toCurrentPrev;
      toCurrentPrev.next = current;
      toCurrentNext.prev = current;
    }
    callback && callback(err, current, toCurrent);
  }

  // 链表转化为数组，不包含头尾元素
  toArray() {
    let current = this.head;
    let arr = [];
    while (!(current.next == null)) {
      current = current.next;
      if (current.next != null) {
        arr.push(current.data);
      }
    }
    return arr;
  }

  // 从数组转化为链表
  fromArray(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
      this.append(arr[i]);
    }
  }
}

export default LinkedList;
