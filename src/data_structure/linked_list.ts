import defaultEquals from './default_equals';
import Node from './node';

/**
 * 链表类
 * push(element)：向链表尾部添加一个新元素
 * insert(element, position)：向链表的特定位置插入一个新元素
 * getElementAt(index)：返回链表中特定位置的元素。不存在则返回 undefined
 * remove(element)：从链表中移除一个元素
 * indexOf(element)：返回元素在链表中的索引。不存在则返回 -1
 * removeAt(position)：从链表的特定位置移除一个元素
 * isEmpty()：如果链表中不包含任何元素则返回 true ；链表长度大于 0 则返回 false
 * size()：返回链表包含的元素个数
 * getHead()：获取头结点
 * toString()：返回表示整个链表的字符串。需要重写 toString 方法，让其只输出元素的值
 */
export default class LinkedList {
  // 链表元素个数
  count: number;

  // head 结点
  head: any;

  // 比较函数
  equalsFn: (x: any, y: any) => Boolean;

  // 构造函数
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  /**
   * 向链表尾部添加元素
   * @param {any} [element] 向链表中加入的新元素
   * @return undefined
   */
  push(element: any) {
    // 初始化新元素，其 next 属性为 undefined
    const node = new Node(element);
    let current;

    // 如果 head 元素为 undefined 或者 null （链表为空）；向链表添加第一个元素
    if (this.head == null) {
      // 将 head 元素指向 node 元素
      this.head = node;
    } else { // 向一个不为空的链表中添加元素
      current = this.head;

      // 找到链表的最后一个元素
      while (current.next != null) {
        current = current.next;
      }

      // 将链表的最后一项的 next 赋值为新元素。
      current.next = node;
    }

    // 链表长度加一
    this.count++;
  }

  /**
   * 返回链表中特定位置的元素
   * @param {number} [index] 链表索引值
   * @return {node} 链表中index位置的元素；不存在则返回 undefined
   */
  getElementAt(index: number) {
    // 验证 index 值在合法范围内；否则返回 undefined
    if (index >= 0 && index <= this.count) {
      // 循环起始元素 node ，默认值为 head 元素
      let node = this.head;
      // 使用 for 循环获取 index 位置的元素
      for (let i = 0; i < index && node.next != null; i++) {
        node = node.next;
      }
      return node;
    }

    return undefined;
  }

  /**
   * 从链表的特定位置移除一个元素
   * @param {number} [index] 需要移除的元素索引
   * @return 被移除的元素的值 element ，不存在则返回 undefined
   */
  removeAt(index: number) {
    // 验证越界值
    if (index >= 0 && index < this.count) {
      // 定义 current ；默认值为 head 元素
      let current = this.head;

      // 移除第一项
      if (index === 0) {
        // 将 head 元素指向当前位置元素的下一个位置
        this.head = current.next;
      } else { // 移除非第一项
        // 获取上一个位置元素
        const previous = this.getElementAt(index - 1);
        // 获取当前位置元素
        current = previous.next;
        // 将上一个元素的 next 指向当前元素的 next
        previous.next = current.next;
      }

      // 链表长度减一
      this.count--;
      // 返回移除的元素的值
      return current.element;
    }

    return undefined;
  }

  /**
   * 在特定位置插入元素
   * @param {any} [element] 插入的元素
   * @param {number} [index] 插入的位置索引
   * @return {boolean} 成功返回 true；失败返回 false
   */
  insert(element: any, index: number) {
    // 验证越界值
    if (index >= 0 && index < this.count) {
      // 初始化呢新元素节点
      const node = new Node(element);

      // 在第一个位置插入
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else { // 在非第一个位置插入
        // 获取前一个位置节点
        const previous = this.getElementAt(index - 1);
        // 获取当前位置节点
        const current = previous.next;
        // 将 node 节点的 next 指向 current
        node.next = current;
        // 将 previous 节点的 next 指向 node
        previous.next = node;
      }

      // 链表长度加一
      this.count++;
      return true;
    }

    return false;
  }

  /**
   * 返回一个元素的位置
   * @param {any} [element] 要查找的元素
   * @return {number} 元素索引；不存在返回 -1
   */
  indexOf(element: any) {
    let current = this.head;
    // 循环链表，比较element的值
    for (let i = 0; i < this.count && current.next != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }

    return -1;
  }

  /**
   * 从链表中移除元素
   * @param {any} [element] 要移除的元素
   * @return 被移除的元素的值 element ，不存在则返回 undefined
   */
  remove(element: any) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  /**
   * 获取链表的元素个数
   * @return {number} 链表元素个数
   */
  size() {
    return this.count;
  }

  /**
   * 链表是否为空
   * @return {boolean} 为空时返回 true ；不为空时返回 false
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * 获取链表头结点
   * @return {Node} 链条头结点
   */
  getHead() {
    return this.head;
  }

  /**
   * 将链表转成一个字符串
   * @return {string} 链表的字符串表示
   */
  toString() {
    if (this.head == null) {
      return '';
    }

    let objString = `${this.head.element}`;
    let current = this.head.next;

    for (let i = 1; i < this.size() && current.next != null; i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }

    return objString;
  }
}
