/**
 *
 * @param{number} n
 * @param{number} s
 * @return {*[]}
 */
function solution(n, s) {
  if (n > s) { // 최소합보다 주어진 수가 높을 경우
    return [-1];
  }
  let maxNum = s; // 모든 집합에서 최대의 값
  for (let i = 1; i < n; i += 1) {
    maxNum -= i;
  }
  const nums = [];
  for (let i = 1; i <= maxNum; i += 1) {
    for (let j = 0; j < n; j += 1) {
      nums.push(i);
    }
  }
  const comb = getCombinations(nums, n)
    .filter((arr) => arr.reduce((a, b) => a + b) === s)
    .sort((a, b) => {
      const am = a.reduce((x, y) => x * y, 1);
      const bm = b.reduce((x, y) => x * y, 1);
      return bm -am;
    });
  return comb[0];
}

const getCombinations = (array, selectNumber) => {
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
};

console.log(solution(2, 9)); // [4, 5]
console.log(solution(2, 1)); // [-1]
console.log(solution(2, 8)); // [4, 4]
