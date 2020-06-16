// 循环链表测试
import CircularLinkedList from './circular_linked_list';

describe('循环链表测试', () => {

  let linkedList = new CircularLinkedList();

  test('链表初始化', () => {
    expect(linkedList.size()).toBe(0);
    expect(linkedList.getElementAt(5)).toBeUndefined();
    linkedList.addHeadArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(linkedList.size()).toBe(10);
    expect(linkedList.getElementAt(5)).toBe(5);
  });
});
