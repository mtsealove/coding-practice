/*
당신은 일렬로 나열된 n개의 집에 택배를 배달하려 합니다.
배달할 물건은 모두 크기가 같은 재활용 택배 상자에 담아 배달하며, 배달을 다니면서 빈 재활용 택배 상자들을 수거하려 합니다.
배달할 택배들은 모두 재활용 택배 상자에 담겨서 물류창고에 보관되어 있고,
i번째 집은 물류창고에서 거리 i만큼 떨어져 있습니다. 또한 i번째 집은 j번째 집과 거리 j - i만큼 떨어져 있습니다. (1 ≤ i ≤ j ≤ n)
트럭에는 재활용 택배 상자를 최대 cap개 실을 수 있습니다.
트럭은 배달할 재활용 택배 상자들을 실어 물류창고에서 출발해 각 집에 배달하면서, 빈 재활용 택배 상자들을 수거해 물류창고에 내립니다.
각 집마다 배달할 재활용 택배 상자의 개수와 수거할 빈 재활용 택배 상자의 개수를 알고 있을 때,
트럭 하나로 모든 배달과 수거를 마치고 물류창고까지 돌아올 수 있는 최소 이동 거리를 구하려 합니다.
각 집에 배달 및 수거할 때, 원하는 개수만큼 택배를 배달 및 수거할 수 있습니다.
1 ≤ n ≤ 100,000
0 ≤ deliveries의 원소 ≤ 50
0 ≤ pickups의 원소 ≤ 50
 */

/**
 *
 * @param{number} cap
 * @param{number} n
 * @param{number[]} deliveries
 * @param{number[]} pickups
 * @return {number}
 */
function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  // 수거해야하거나 배달해야 하는 개수가 남아있을 때 계속 수행
  let maxIndex = 0;
  let deliverySum = deliveries.reduce((a, b) => a + b);
  let pickupSum = pickups.reduce((a, b) => a + b);
  while (deliverySum !== 0 || pickupSum !== 0) {
    let carry = 0;
    for (let i = 0; i < n; i += 1) { // 최대로 움직여야 하는 위치 계산
      if (deliveries[i] !== 0 || pickups[i] !== 0) {
        maxIndex = i + 1;
      }
    }
    // 배달 출발
    for (let i = maxIndex - 1; i >= 0; i -= 1) {
      if (carry + deliveries[i] <= cap) { // 최대치만큼 실기
        carry += deliveries[i];
        deliverySum -= deliveries[i];
        deliveries[i] = 0;
      }
      if (carry === cap) {
        break;
      }
    }
    carry = 0;
    // 픽업(다시 리셋)
    for (let i = maxIndex - 1; i >= 0; i -= 1) {
      if (carry + pickups[i] <= cap) { // 최대치만큼 실기
        carry += pickups[i];
        pickupSum -= pickups[i];
        pickups[i] = 0;
      }
      if (carry === cap) {
        break;
      }
    }
    answer += maxIndex * 2;
  }
  return answer;
}

console.time();
console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0])); // 16
console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0])); // 30
console.timeEnd();
