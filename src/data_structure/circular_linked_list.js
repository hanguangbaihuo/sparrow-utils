// 双向循环链表
import DoublyLinkedList from './doubly_linked_list';
import defaultEquals from './default_equals';

class CircularLinkedList extends DoublyLinkedList{
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this._head.prev = this._tail; // 将头结点的 prev 指向尾结点
    this._tail.next = this._head; // 将尾结点的 next 指向头结点
  }
}

export default CircularLinkedList;
