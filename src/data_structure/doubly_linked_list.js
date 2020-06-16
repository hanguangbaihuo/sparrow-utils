// 双向链表
import LinkedList from './linked_list';
import DoublyNode from './doubly_node';
import defaultEquals from './default_equals';


class DoublyLinkedList extends LinkedList {

  _head = new DoublyNode('head'); // 头节点
  _tail = new DoublyNode('tail'); // 尾结点

  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this._head.next = this._tail; // 头结点 next 指向尾结点
    this._tail.prev = this._head; // 尾结点 prev 指向头结点
  }

  // 获取链表的最后一个元素节点
  getLastNode() {
    if (!this.isEmpty()) {
      return this._getTail().prev;
    }
    return undefined;
  }

  // 正序循环，获取链表中某个位置上的节点
  _loopFromHead(index) {
    // 判断index的值在合法范围
    if (index >= 0 && index < this.size()) {
      // 设置当前节点为头节点
      let node = this._getHead();
      for (let i = 0; i <= index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    // index不在合法范围，返回undefined
    return undefined;
  }

  // 逆序循环，获取链表中某个位置上的节点
  _loopFromTail(index) {
    // 判断index的值在合法范围
    if (index >= 0 && index < this.size()) {
      // 设置当前节点为尾节点
      let node = this._getTail();
      for (let i = this.size() - 1; i >= index && node != null; i--) {
        node = node.prev;
      }
      return node;
    }
    // index不在合法范围，返回undefined
    return undefined;
  }

  // 获取链表中某个位置上的节点
  getNodeAt(index) {
    // 判断index的值在合法范围
    if (index >= 0 && index < this.size()) {
      // 取链表程度的一半
      let median = Math.floor(this.size() / 2);
      let node;

      // index 小于等于 median 的时候，使用正序循环，否则使用逆序循环获取节点
      // 这样能节省一半的循环时间，但是时间复杂度依然是 O(n)
      if (index <= median) {
        node = this._loopFromHead(index);
      } else {
        node = this._loopFromTail(index);
      }
      return node;
    }
    // index不在合法范围，返回undefined
    return undefined;
  }

  // 向链表尾部添加元素节点
  push(element) {
    const currentNode = new DoublyNode(element);
    // 尾结点
    let tailNode = this._getTail();
    // 尾结点的上一个节点
    let prevNode = tailNode.prev;

    // 添加逻辑
    currentNode.next = tailNode;
    currentNode.prev = prevNode;
    prevNode.next = currentNode;
    tailNode.prev = currentNode;

    // 链表长度加 1
    this._sizeAddOne();
  }

  // 在链表头部添加元素
  addHead(element) {
    const currentNode = new DoublyNode(element);
    // 头结点
    let headNode = this._getHead();
    // 头结点的下一个节点
    let nextNode = headNode.next;

    // 添加逻辑
    currentNode.next = nextNode;
    currentNode.prev = headNode;
    headNode.next = currentNode;
    nextNode.prev = currentNode;

    // 链表长度加 1
    this._sizeAddOne();
  }

  // 在链表任意位置插入元素
  insert(element, index) {
    // 检查越界值，index === this.size() 时，在链表尾部插入元素节点
    if (index >= 0 && index <= this.size()) {
      let node = new DoublyNode(element);

      let currentNode = this._getNodeIncludeHeadAndTail(index);
      let prevNode = currentNode.prev;

      // 插入逻辑
      prevNode.next = node;
      node.prev = prevNode;
      node.next = currentNode;
      currentNode.prev = node;

      // 链表长度加 1
      this._sizeAddOne();

      return true;
    }
    return false;
  }

  // 复制链表，返回一个新链表
  copy() {
    return this._copyHelp(new DoublyLinkedList());
  }

  // 连接两个链表；
  // 次方法返回一个新链表，不会修改现有链表。
  // 是否需要使用深拷贝？
  concat(linkedList) {

    // 复制链表
    let newThis = this.copy();
    let newConcat = linkedList.copy();

    // 传入的链表为空时，返回this的复制链表
    if (linkedList.isEmpty()) {
      return newThis;
    }
    // this 链表为空时，返回传入的链表的复制链表
    if (this.isEmpty()) {
      return newConcat;
    }

    // 此时，this 和传入的链表都不为空
    let newTail = newThis._getTail();
    let newLastNode = newThis.getLastNode();
    let concatFirstNode = newConcat.getFirstNode();
    let concatLastNode = newConcat.getLastNode();

    // 链表的最后一个元素节点，连接传入链表的第一个元素节点
    newLastNode.next = concatFirstNode;
    concatFirstNode.prev = newLastNode;
    // 传入链表的最后一个元素节点，连接链表的尾结点
    newTail.prev = concatLastNode;
    concatLastNode.next = newTail;

    // 链表长度是两个链表长度之和
    newThis._setSize(newThis.size() + newConcat.size());

    // 释放内存
    this._freeMemory(newConcat);

    return newThis;
  }

  // 释放链表头尾节点的内存
  _freeMemory(linkedList) {
    // 有双向引用，主动释放内存
    let concatHead = linkedList._getHead();
    let concatTail = linkedList._getTail();
    concatHead.next = undefined;
    concatTail.prev = undefined;
    // 循环链表的释放处理
    concatHead.prev = undefined;
    concatTail.next = undefined;
  }

  // 将新链表链接到本链表直上
  concatThis(linkedList) {
    if (!linkedList.isEmpty()) {
      // 复制传入的链表
      let newConcat = linkedList.copy();
      let thisHead = this._getHead();
      let thisTail = this._getTail();
      let thisLastNode = this.getLastNode();
      let concatFirstNode = newConcat.getFirstNode();
      let concatLastNode = newConcat.getLastNode();

      // 如果链表为空，将头结点连接到传入链表的第一个元素节点
      if (this.isEmpty()) {
        thisHead.next = concatFirstNode;
        concatFirstNode.prev = thisHead;
      } else {
        // 链表不为空，将链表的最后一个元素节点，连接到传入链表的第一个元素节点
        thisLastNode.next = concatFirstNode;
        concatFirstNode.prev = thisLastNode;
      }

      // 将传入链表的最后一个元素节点，连接到链表的尾结点
      thisTail.prev = concatLastNode;
      concatLastNode.next = thisTail;

      // 链表长度为两个链表长度之和
      this._setSize(this.size() + newConcat.size());

      // 释放内存
      this._freeMemory(newConcat);

    }
    return this;
  }

  // 在任意位置插入一个链表
  insertLinkedList(linkedList, index) {

    // 当 linkedList.size() === 0 时，直接返回 true
    if (linkedList.isEmpty()) {
      return true;
    }

    // 复制链表
    let concatLinkedList = linkedList.copy();

    // index === this.size() 时，连接两个链表
    if (index === this.size()) {
      this.concatThis(concatLinkedList);
      return true;
    }

    // 检查index边界值
    if (index >= 0 && index < this.size()) {

      let currentNode = this._getNodeIncludeHeadAndTail(index); // 当前节点
      let prevNode = currentNode.prev; // 上一个节点

      let insertFirstNode = concatLinkedList.getFirstNode(); // 插入链表的第一个元素节点
      let insertLastNode = concatLinkedList.getLastNode(); // 插入链表的最后一个元素节点

      // 链表的上一个节点，连接插入链表的第一个元素节点
      prevNode.next = insertFirstNode;
      insertFirstNode.prev = prevNode;
      // 插入链表的最后一个元素节点，连接链表的当前节点
      insertLastNode.next = currentNode;
      currentNode.prev = insertLastNode;

      // 链表长度 +1
      this._setSize(this.size() + concatLinkedList.size());

      // 释放内存
      this._freeMemory(concatLinkedList);

      return true;
    }
    return false;
  }

  // 通过数组插入元素
  insertArray(arr, index) {
    // 将数组转为链表
    const linkedList = DoublyLinkedList.fromArray(arr);
    this.insertLinkedList(linkedList, index);
  }

  // 在链表任意位置移除元素
  removeAt(index) {
    // 检查越界值
    if (index >= 0 && index < this.size()) {
      // 获取 index 位置上即将被删除的节点
      let currentNode = this._getNodeIncludeHeadAndTail(index);
      let prevNode = currentNode.prev;
      let nextNode = currentNode.next;

      // 删除逻辑
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      // 释放当前节点的内存
      currentNode.prev = undefined;
      currentNode.next = undefined;

      // 链表长度减一
      this._sizeMinusOne();

      return currentNode.element;
    }
    return undefined;
  }

  // 删除一个节点
  remove(element) {
    // 需要循环两次
    // let index = this.indexOf(element);
    // this.removeAt(index);

    // 头结点
    let node = this._getHead();
    // 遍历整个链表节点
    for (let i = 0; i < this.size() && node != null; i++) {
      node = node.next;
      // 判断节点元素和传入的元素是否相等，相等则返回位置 i
      if (this._equalsFn(element, node.element)) {
        let prevNode = node.prev;
        let nextNode = node.next;

        // 删除逻辑
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        // 释放当前节点的内存
        node.next = undefined;
        node.prev = undefined;

        // 链表长度减一
        this._sizeMinusOne();

        return element;
      }
    }

    return undefined;
  }

  // 清空链表
  clean() {
    // let current = this.getFirstNode();
    // let index = 0;
    // let length = this.size();
    // let prev, next;

    // while (index < length && current != null) {
    //   next = current.next;
    //   prev = current.prev;

    //   prev.next = next;
    //   next.prev = prev;
    //   current.next = undefined;
    //   current.prev = undefined;
    //   current = next;

    //   this._sizeMinusOne();

    //   index++;
    // }

    const length = this.size();
    for (let i = 0; i < length; i++) {
      this.removeHead();
    }
  }

  // 静态方法，将数组转化为链表
  static fromArray(arr) {
    let linkedList = new DoublyLinkedList();
    linkedList.pushArray(arr);
    return linkedList;
  }

}

export default DoublyLinkedList;
