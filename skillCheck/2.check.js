/*
어느 공원 놀이터에는 시소가 하나 설치되어 있습니다.
이 시소는 중심으로부터 2(m), 3(m), 4(m) 거리의 지점에 좌석이 하나씩 있습니다.
이 시소를 두 명이 마주 보고 탄다고 할 때,
시소가 평형인 상태에서 각각에 의해 시소에 걸리는 토크의 크기가 서로 상쇄되어 완전한 균형을 이룰 수 있다면 그 두 사람을 시소 짝꿍이라고 합니다.
즉, 탑승한 사람의 무게와 시소 축과 좌석 간의 거리의 곱이 양쪽 다 같다면 시소 짝꿍이라고 할 수 있습니다.
사람들의 몸무게 목록 weights이 주어질 때, 시소 짝꿍이 몇 쌍 존재하는지 구하여 return 하도록 solution 함수를 완성해주세요.
 */

const gcd = (a, b) => {
  let r;
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
};

const getLcm = (a, b) => (a * b) / gcd(a, b);

/**
 *
 * @param{number[]} weights
 * @return {number}
 */
function solution(weights) {
  let answer = 0;
  weights = weights.sort((a, b) => a - b);
  const map = new Map();
  weights.forEach((w) => {
    const a = w;
    const b = (w * 2) / 3;
    const c = w / 2;
    const d = (w * 3) / 4;
    if (map.has(a)) {
      answer += map.get(a);
    }
    if (map.has(b)) {
      answer += map.get(b);
    }
    if (map.has(c)) {
      answer += map.get(c);
    }
    if (map.has(d)) {
      answer += map.get(d);
    }
    map.set(w, (map.get(w) || 0) + 1);
  });
  return answer;
}

function getCombinations(array, selectNumber) {
  const results = [];
  if (selectNumber === 1) {
    return array.map((element) => [element]);
  }
  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
}

console.log(solution([100, 180, 360, 100, 270]));
