/*
자연수 x를 y로 변환하려고 합니다. 사용할 수 있는 연산은 다음과 같습니다.

x에 n을 더합니다
x에 2를 곱합니다.
x에 3을 곱합니다.
자연수 x, y, n이 매개변수로 주어질 때,
 x를 y로 변환하기 위해 필요한 최소 연산 횟수를 return하도록 solution 함수를 완성해주세요.
 이때 x를 y로 만들 수 없다면 -1을 return 해주세요.

 */

/**
 *
 * @param{number} x
 * @param{number} y
 * @param{number} n
 * @return {number}
 */

function solution(x, y, n) {
  // 계산식 x + n, 2n, 3n
  const queue = [[x, 0]];
  const trySet = new Set();
  while (queue.length > 0) {
    const [v, move] = queue.shift();
    if (v === y) {
      return move;
    }
    if (v < y) {
      if (!trySet.has(3 * v) && 3 * v <= y) {
        queue.push([3 * v, move + 1]);
        trySet.add(3 * v);
      }
      if (!trySet.has(2 * v && 2 * v <= y)) {
        queue.push([2 * v, move + 1]);
        trySet.add(2 * v);
      }
      if (!trySet.has(n + v) && v + n <= y) {
        queue.push([v + n, move + 1]);
        trySet.add(v + n);
      }
    }
  }
  return -1;
}

console.log(solution(10, 40, 5)); // 2
console.log(solution(10, 40, 30)); // 1
console.log(solution(2, 5, 4)); // -1;
