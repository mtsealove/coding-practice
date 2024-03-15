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

  front() {
    return this.head && this.head.data;
  }

}

function solution(land) {
  const visited = land.map(() => Array.from({ length: land[0].length }, () => false));
  const xLength = land[0].length;
  const yLength = land.length;
  const dir = [[0, 1], [1, 0], [-1, 0], [0, -1]];
  const sectors = [];

  for (let i = 0; i < land.length; i += 1) {
    for (let j = 0; j < land[0].length; j += 1) { // 모든 구간별로 수행
      if (visited[i][j] === false && land[i][j] === 1) {
        const m = new Set();
        m.add(`${j} ${i}`);
        // m.add([j, i])
        const queue = new Queue();
        queue.enqueue([j, i, m]);
        while (queue.front()) {
          const [x, y, members] = queue.dequeue();
          if (visited[y][x] === false) {
            visited[y][x] = true;
            for (const [tx, ty] of dir) {
              const xx = x + tx;
              const yy = y + ty;
              if (xx >= 0 && xx < xLength && yy >= 0 && yy < yLength
                  && visited[yy][xx] === false && land[yy][xx] === 1) {
                m.add(`${xx} ${yy}`);
                queue.enqueue([xx, yy, members]);
              }
            }
          }
          if (queue.length === 0) {
            sectors.push([...members].map((l) => l.split(' ')[0]).map(Number));
          }
        }
      }
    }
  }
  const map = new Map();
  for (const sector of sectors) {
    const items = new Set(sector);
    const { length } = sector;
    items.forEach((item) => {
      map.set(item, (map.get(item) || 0) + length);
    });
  }
  return [...map].sort((a, b) => b[1] - a[1])[0][1];
}

console.log(solution([[0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [1, 1, 0, 0, 0, 1, 1, 0], [1, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 1, 1]]));
console.log(solution([[1, 0, 1, 0, 1, 1], [1, 0, 1, 0, 0, 0], [1, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0], [1, 0, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1]]));
