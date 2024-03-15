class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
    this.length += 1;
  }

  dequeue() {
    if (!this.head) {
      return false;
    }
    const { data } = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return data;
  }

  getDupSize() {
    if (!this.head) return false;
    let node = this.head;
    const set = new Set();
    while (node) {
      set.add(node.data);
      node = node.next;
    }
    return set.size;
  }
}

function solution(topping) {
  let answer = 0;
  const leftMap = new Map();
  const rightMap = new Map();
  for (const topp of topping) {
    rightMap.set(topp, (rightMap.get(topp) || 0) + 1);
  }
  for (const topp of topping) {
    leftMap.set(topp, (leftMap.get(topp) || 0) + 1);
    rightMap.set(topp, (rightMap.get(topp) || 0) - 1);
    if (leftMap.get(topp) === 0) {
      leftMap.delete(topp);
    }
    if (rightMap.get(topp) === 0) {
      rightMap.delete(topp);
    }
    if (leftMap.size === rightMap.size) {
      answer += 1;
    }
  }
  return answer;
}

console.time();
console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
console.log(solution([1, 2, 3, 1, 4]));
console.timeEnd();
