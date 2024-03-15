/**
 *
 * @param{number} n
 * @param{number[]} works
 * @return {number}
 */
function solution(n, works) {
  const arr = [];
  if (works.reduce((a, b) => a + b) <= n) { // 야근 없음
    return 0;
  }
  // work의 개수로 쪼개서 합이 n이 되는 배열 생성
  for (let i = 0; i <= n; i += 1) {
    for (let j = 0; j < works.length; j += 1) {
      arr.push(i);
    }
  }
  // 합쳐서 n 이되는 모든 조합
  const comb = getPermutation(arr, works.length)
    .filter((t) => t.reduce((a, b) => a + b) === n)
    .map((t) => {
      const result = [];
      for (let i = 0; i < works.length; i += 1) {
        result.push(works[i] - t[i]);
      }
      return result;
    })
    .filter((t) => {
      let found = false;
      for (let i = 0; i < works.length; i += 1) {
        if (t[i] < 0) {
          found = true;
        }
      }
      return !found;
    })
    .map((t) => {
      let sum = 0;
      for (let i = 0; i < works.length; i += 1) {
        sum += t[i] ** 2;
      }
      return sum;
    })
    .sort((a, b) => a - b);
  return comb[0];
}

const getPermutation = (arr, num) => {
  const res = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const permutations = getPermutation(rest, num - 1);
    const attach = permutations.map((permutation) => [v, ...permutation]);
    res.push(...attach);
  });
  return res;
};

console.time();
console.log(solution(4, [4, 3, 3]));
console.log(solution(1, [2, 1, 2]));
console.log(solution(3, [1, 1]));
console.timeEnd();
