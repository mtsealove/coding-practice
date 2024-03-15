/**
 *
 * @param{number} k
 * @param{number} d
 * @return {number}
 */
function solution(k, d) {
  let answer = 0;
  for (let i = 0; i < d + 1; i += k) {
    const maxY = Math.sqrt(d ** 2 - i ** 2);
    const cnt = Math.floor(maxY / k) + 1;
    answer += cnt;
  }
  return answer;
}

console.log(solution(2, 4));
console.log(solution(1, 5));
