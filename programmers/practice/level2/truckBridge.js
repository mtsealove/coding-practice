/**
 *
 * @param{number} bridge_length
 * @param{number} weight
 * @param{number[]} truck_weights
 * @return {number}
 */

function solution(bridge_length, weight, truck_weights) {
  let answer = bridge_length;
  let queue = [];
  while (truck_weights.length !== 0) { // 모든 트럭이 건널떄까지 반복
    queue = queue.map(([a, b]) => [a, b - 1])
      .filter(([_, b]) => b > 0);
    const sum = queue.length !== 0 ? queue.map(([n]) => n)
      .reduce((a, b) => a + b) : 0; // 올려진 트럭의 무게의 합
    if (queue.length < bridge_length && sum + truck_weights[0] <= weight) {
      // 건너는 중인 개수가 견딜 수 있는 것보다 낮고 무게의 합이 최대하중 이하일 때 건너는 큐에 삽입
      queue.push([truck_weights.shift(), bridge_length]);
    }
    answer += 1;
  }

  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
