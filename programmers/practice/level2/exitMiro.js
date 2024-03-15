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

  getSize() {
    return this.length;
  }
}

/**
 *
 * @param{string[]} maps
 * @return {number}
 */

function solution(maps) {
  const map = maps;
  const queue = new Queue();
  const visited = Array.from({ length: map.length }).map(() => Array.from({ length: map[0].length }, () => false));
  // 현재 위치 설정
  for (let i = 0; i < map.length; i += 1) {
    for (let j = 0; j < map[0].length; j += 1) {
      if (map[i][j] === 'S') {
        visited[i][j] = true;
        queue.enqueue([j, i, 0]);
        break;
      }
    }
  }
  const [lCnt, x, y] = bfs(map, queue, visited, 'L');
  if (lCnt === -1) {
    return -1;
  }
  const visited2 = Array.from({ length: map.length }).map(() => Array.from({ length: map[0].length }, () => false));
  visited2[y][x] = true;
  // queue = new Queue();
  const queue2 = new Queue();
  queue2.enqueue([x, y, 0]);
  const [eCnt] = bfs(map, queue2, visited2, 'E');
  if (eCnt === -1) {
    return -1;
  }
  return lCnt + eCnt;
}

function bfs(map, queue, visited, word) {
  const xLength = map[0].length;
  const yLength = map.length;
  const dir = [[0, 1], [1, 0], [-1, 0], [0, -1]];
  while (queue.getSize() !== 0) {
    const [x, y, cnt] = queue.dequeue();
    if (cnt > map.length * map[0].length) {
      return [-1, 0, 0];
    }
    if (map[y][x] === word) {
      return [cnt, x, y];
    }
    visited[y][x] = true;
    for (const [tx, ty] of dir) {
      const xx = x + tx;
      const yy = y + ty;
      if (xx >= 0 && xx !== xLength
          && yy >= 0 && yy !== yLength
          && visited[yy][xx] === false && map[yy][xx] !== 'X') {
        queue.enqueue([xx, yy, cnt + 1]);
      }
    }
  }
  return [-1, 0, 0];
}

console.time();
console.log(solution(['SOOOL', 'XXXXO', 'OOOOO', 'OXXXX', 'OOOOE']));
console.log(solution(['LOOXS', 'OOOOX', 'OOOOO', 'OOOOO', 'EOOOO']));
console.timeEnd();
