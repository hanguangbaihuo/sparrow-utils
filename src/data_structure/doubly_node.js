import Node from './node';

class DoublyNode extends Node {

  constructor(element) {
    super(element);
    this.prev = undefined;
  }

}

export default DoublyNode;
