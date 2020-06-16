// 有序链表
import DoublyLinkedList from './doubly_linked_list';
import DoublyNode from './doubly_node';
import defaultCompare from './default_compare';
import defaultEquals from './default_equals';

class SortedLinkedList extends DoublyLinkedList {

  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this._compareFn = compareFn;
  }

  // 插入元素
  insert(element) {
    let position = this._getNodeNextInsert(element);

    if (this.size() === 0 || position.index === this.size()) {
      super.push(element);
    } else {
      let currentNode = new DoublyNode(element);
      let nextNode = position.node;
      let prevNode = nextNode.prev;

      currentNode.next = nextNode;
      currentNode.prev = prevNode;
      prevNode.next = currentNode;
      nextNode.prev = currentNode;

      // 表长加 1
      this._sizeAddOne();
    }

  }

  // 重写方法，避免添加节点时打乱链表顺序
  push(element) {
    this.insert(element);
  }

  // 重写方法，避免添加节点时打乱链表顺序
  addHead(element) {
    this.insert(element);
  }

  _getNodeNextInsert(element) {
    let current = this._getHead();
    let i = 0;

    for (; i < this.size(); i++) {
      current = current.next;
      let comp = this._compareFn(element, current.element);
      if (comp === -1) {
        break;
      }
    }

    return {
      index: i,
      node: current,
    };
  }
}

export default SortedLinkedList;
