// 双向链表测试
import DoublyLinkedList from './doubly_linked_list';

describe('双向链表测试', () => {

  let linkedList = new DoublyLinkedList();

  test('链表初始化', () => {
    expect(linkedList.size()).toBe(0);
    expect(linkedList.getFirstNode()).toBeUndefined();
  });

  test('链表push测试', () => {
    linkedList.push(0);
    expect(linkedList.getFirstNode().element).toBe(0);
    expect(linkedList.size()).toBe(1);
    expect(linkedList.getLastNode().element).toBe(0);
    linkedList.push(10);
    expect(linkedList.getFirstNode().element).toBe(0);
    expect(linkedList.size()).toBe(2);
    expect(linkedList.getLastNode().element).toBe(10);
    linkedList.pushArray([2, 3, 4, 100]);
    expect(linkedList.getFirstNode().element).toBe(0);
    expect(linkedList.size()).toBe(6);
    expect(linkedList.getLastNode().element).toBe(100);
  });

  test('清空链表', () => {

    linkedList.clean();
    expect(linkedList.size()).toBe(0);
    expect(linkedList.getFirstNode()).toBeUndefined();
    expect(linkedList.getLastNode()).toBeUndefined();
  });

  test('链表查询', () => {
    linkedList.clean();
    linkedList.pushArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(linkedList.indexOf(0)).toBe(0);
    expect(linkedList.indexOf(9)).toBe(9);
    expect(linkedList.indexOf(5)).toBe(5);
    expect(linkedList.indexOf(10)).toBe(-1);
    expect(linkedList.indexOf(-1)).toBe(-1);
    expect(linkedList.indexOf(20)).toBe(-1);
    expect(linkedList.indexOf(-10)).toBe(-1);
  });

  test('链表插入', () => {
    linkedList.clean();
    linkedList.pushArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    linkedList.insert(20, 5);
    expect(linkedList.indexOf(20)).toBe(5);
    expect(linkedList.size()).toBe(11);
    linkedList.insert(100, 0);
    expect(linkedList.indexOf(100)).toBe(0);
    expect(linkedList.size()).toBe(12);
    linkedList.insert(200, 12);
    expect(linkedList.indexOf(200)).toBe(12);
    expect(linkedList.size()).toBe(13);
    linkedList.insert(300, 1);
    expect(linkedList.indexOf(300)).toBe(1);
    expect(linkedList.size()).toBe(14);
    linkedList.insert(400, 13);
    expect(linkedList.indexOf(400)).toBe(13);
    expect(linkedList.size()).toBe(15);

    linkedList.clean();
    linkedList.pushArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    linkedList.insertArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
    expect(linkedList.size()).toBe(20);
    expect(linkedList.getFirstNode().element).toBe(0);
    expect(linkedList.getLastNode().element).toBe(9);
    // console.log(linkedList.getNodeAt(14));
    // console.log(linkedList.toString());
  });

  test('链表删除', () => {
    linkedList.clean();
    linkedList.pushArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(linkedList.toString()).toBe('0,1,2,3,4,5,6,7,8,9');
    expect(linkedList.removeAt(0)).toBe(0);
    expect(linkedList.indexOf(0)).toBe(-1);
    expect(linkedList.indexOf(1)).toBe(0);
    expect(linkedList.size()).toBe(9);

    expect(linkedList.removeAt(8)).toBe(9);
    expect(linkedList.getElementAt(7)).toBe(8);
    expect(linkedList.size()).toBe(8);

    expect(linkedList.remove(4)).toBe(4);
    expect(linkedList.size()).toBe(7);

    expect(linkedList.remove(10)).toBeUndefined();
    expect(linkedList.size()).toBe(7);
  });

  test('在头部添加节点', () => {
    linkedList.clean();
    linkedList.addHead(0);
    expect(linkedList.getElementAt(0)).toBe(0);
    expect(linkedList.length).toBe(1);
    linkedList.addHead(1);
    expect(linkedList.indexOf(1)).toBe(0);
    expect(linkedList.getElementAt(0)).toBe(1);
    expect(linkedList.size()).toBe(2);

    linkedList.clean();
    linkedList.addHeadArray([0, 1, 2, 3, 4]);
    expect(linkedList.getFirstNode().element).toBe(0);
    expect(linkedList.getLastNode().element).toBe(4);
    expect(linkedList.size()).toBe(5);
  });

  test('在头部删除节点', () => {
    linkedList.clean();
    linkedList.addHead(0);
    linkedList.addHead(1);
    expect(linkedList.removeHead()).toBe(1);
    expect(linkedList.removeHead()).toBe(0);
    expect(linkedList.removeHead()).toBeUndefined();
  });

  test('在尾部删除节点', () => {
    linkedList.clean();
    linkedList.addHead(0);
    linkedList.addHead(1);

    expect(linkedList.removeTail()).toBe(0);
    expect(linkedList.size()).toBe(1);
    expect(linkedList.removeTail()).toBe(1);
    expect(linkedList.removeTail()).toBeUndefined();
  });

  test('链表concat测试', () => {

    linkedList.clear();
    linkedList.pushArray([0, 1, 2, 3, 4, 5]);
    expect(linkedList.size()).toBe(6);
    expect(linkedList.getFirstElement()).toBe(0);
    expect(linkedList.getLastElement()).toBe(5);

    let linkedList2 = DoublyLinkedList.fromArray([6, 7, 8, 9]);
    let linkedList3 = linkedList.concat(linkedList2);
    // console.log('linkedList: ', linkedList);
    // console.log('linkedList2: ', linkedList2);
    // console.log('linkedList3: ', linkedList3);
    expect(linkedList3.size()).toBe(10);
    expect(linkedList3.getFirstElement()).toBe(0);
    expect(linkedList3.getLastElement()).toBe(9);
    expect(linkedList3.toString()).toBe('0,1,2,3,4,5,6,7,8,9');

    linkedList.clear();
    let linkedList4 = linkedList.concat(linkedList2);
    expect(linkedList4.size()).toBe(4);
    expect(linkedList4.getFirstElement()).toBe(6);
    expect(linkedList4.getLastElement()).toBe(9);

    linkedList.clear();
    linkedList2.clear();
    linkedList.pushArray([0, 1, 2, 3, 4, 5]);
    let linkedList5 = linkedList.concat(linkedList2);
    expect(linkedList5.size()).toBe(6);
    expect(linkedList5.getFirstElement()).toBe(0);
    expect(linkedList5.getLastElement()).toBe(5);
  });

  test('链接 concatThis 测试', () => {
    linkedList.clear();
    linkedList.pushArray([0, 1, 2, 3, 4, 5]);
    let linkedList2 = DoublyLinkedList.fromArray([6, 7, 8, 9]);
    linkedList.concatThis(linkedList2);

    expect(linkedList.size()).toBe(10);
    expect(linkedList.getFirstElement()).toBe(0);
    expect(linkedList.getLastElement()).toBe(9);

    linkedList2.push(11);
    expect(linkedList.size()).toBe(10);
    expect(linkedList2.size()).toBe(5);
    expect(linkedList.toString()).toBe('0,1,2,3,4,5,6,7,8,9');
    expect(linkedList2.toString()).toBe('6,7,8,9,11');

    linkedList.clear();
    linkedList.pushArray([{ a: 1 }, { a: 2 }, { a: 3 }]);
    linkedList2.clear();
    linkedList2.pushArray([{ b: 1 }, { b: 2 }]);
    linkedList.concatThis(linkedList2);

    expect(linkedList.size()).toBe(5);
    expect(linkedList2.size()).toBe(2);
    expect(linkedList.getLastElement().b).toBe(2);
    expect(linkedList2.getLastElement().b).toBe(2);

    linkedList2.push({ b: 3 });
    expect(linkedList.getLastElement().b).toBe(2);
    expect(linkedList2.getLastElement().b).toBe(3);

    linkedList.clean();
    linkedList2.clear();
    let o1 = { b: 1 };
    let o2 = { b: 2 };
    let o3 = { b: 3 };
    let o4 = { b: 4 };
    let o5 = { b: 5 };
    linkedList.push(o1);
    linkedList.push(o2);
    linkedList2.push(o3);

    linkedList.concatThis(linkedList2);
    expect(linkedList.getFirstElement()).toBe(o1);
    expect(linkedList.getLastElement()).toBe(o3);
    expect(linkedList.size()).toBe(3);
    linkedList.push(o5);
    linkedList2.push(o4);
    expect(linkedList.getFirstElement()).toBe(o1);
    expect(linkedList.getLastElement()).toBe(o5);
    expect(linkedList.size()).toBe(4);
    linkedList.concatThis(linkedList2);
    expect(linkedList.getFirstElement()).toBe(o1);
    expect(linkedList.getLastElement()).toBe(o4);
    expect(linkedList.size()).toBe(6);
  });

});
