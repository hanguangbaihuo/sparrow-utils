import Node from './node';
/**
 * 测试列表节点类
 */
describe('node', () => {
  const node = new Node('a');

  test('是否正确生成了链表节点', () => {
    expect(node.element).toEqual('a');

    expect(node.next).not.toBeDefined();
  });
});
