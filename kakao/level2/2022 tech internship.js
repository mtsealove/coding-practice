/*
js에서는 제대로된 큐를 지원하지 않기 때문에 별도의 큐 클래스를 생성하여 사용하는 것이 좋음
진짜 압도적인 시간 차이를 보여줌
 */

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
}

/**
 *
 * @param{number[]} queue1
 * @param{number[]} queue2
 * @return {number}
 */
function solution(queue1, queue2) {
  let answer = 0;
  const concat = [...queue1, ...queue2].sort();
  const limit = queue1.length * 3;
  const goal = concat
    .reduce((a, b) => a + b) / 2; // 하나의 큐의 합
  // O(n)
  if (concat.filter((a) => a > goal).length !== 0) { // 평균치보다 높은 값을 보유하면 수행 불가능
    return -1;
  }
  // O(n^2)
  let aSum = queue1.reduce((a, b) => a + b);
  let bSum = queue2.reduce((a, b) => a + b);
  const que1 = new Queue();
  queue1.forEach((n) => {
    que1.enqueue(n);
  });
  const que2 = new Queue();
  queue2.forEach((n) => {
    que2.enqueue(n);
  });
  while (aSum !== goal) {
    if (aSum < bSum) {
      const pop = que2.dequeue();
      que1.enqueue(pop);
      aSum += pop;
      bSum -= pop;
    } else {
      const pop = que1.dequeue();
      que2.enqueue(pop);
      aSum -= pop;
      bSum += pop;
    }
    answer += 1;
    if (queue1.length === 0 || queue2.length === 0) {
      return -1;
    }
    if (answer > limit) {
      return -1;
    }
  }
  return answer;
}
console.time();
console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]));
console.log(solution([1, 1], [1, 5]));
console.log(solution([1, 4], [4, 8]));
console.timeEnd();
