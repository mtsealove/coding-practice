// eslint-disable-next-line max-classes-per-file
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(value) {
    const init = new Node(value);
    this.size = 0;
    this.root = init;
  }

  insert(value) {
    const newNode = new Node(value);
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return;
      }
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          this.size += 1;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          this.size += 1;
          return;
        }
        current = current.right;
      }
    }
  }

  dfs() {
    const result = [];
    const stack = [this.root];
    while (stack.length !== 0) {
      const current = stack.pop();
      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }
      result.push(current.value);
    }
    return result;
  }

  bfs() {
    const result = [];
    const queue = [this.root];
    while (queue.length !== 0) {
      const current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      result.push(current.value);
    }
    return result;
  }
}

const t = new Tree(5);
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);
console.log(t);
console.log(t.dfs());
console.log(t.bfs());
