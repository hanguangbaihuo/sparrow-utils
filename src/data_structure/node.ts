/**
 * 链表节点类
 */
class Node {
  element: any;

  next: any;

  constructor(element: any) {
    this.element = element;
    this.next = undefined;
  }
}

export default Node;
