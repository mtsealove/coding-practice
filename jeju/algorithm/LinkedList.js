const list = {
  head: {
    value: 90,
    next: {
      value: 10,

    },
  },
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    const head = new Node('head');
    this.head = head;
    this.tail = head;
    this.current = undefined;
    this.size = 0;
  }

  length() {
    return this.length;
  }

  append(data) {
    const newNode = new Node(data);
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }

  toArray() {
    let current = this.head.next;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  insert(index, data) {
    let current = this.head.next;
    for (let i = 0; i < index - 1; i += 1) {
      current = current.next;
    }
    const newNode = new Node(data);
    newNode.next = current.next;
    current.next = newNode;
    this.size += 1;
  }
}

const l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(41);
l.append(10);
l.insert(2, 100);
console.log(l.toArray());
