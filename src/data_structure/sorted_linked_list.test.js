// 有序链表测试
import SortedLinkedList from './sorted_linked_list';

describe('有序链表测试', () => {

  let linkedList = new SortedLinkedList();

  test('链表初始化', () => {
    linkedList.addHeadArray([9, 1, 2, 5, 4, 3, 6, 7, 8, 0]);

    expect(linkedList.size()).toBe(10);
    expect(linkedList.getElementAt(5)).toBe(5);
    expect(linkedList.getFirstNode().element).toBe(0);
    expect(linkedList.getLastNode().element).toBe(9);
    expect(linkedList.toString()).toBe('0,1,2,3,4,5,6,7,8,9');

    linkedList.addHead(100);
    expect(linkedList.getLastNode().element).toBe(100);
    linkedList.push(-1);
    expect(linkedList.getFirstNode().element).toBe(-1);
    expect(linkedList.size()).toBe(12);
  });
});
