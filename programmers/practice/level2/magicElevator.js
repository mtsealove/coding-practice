/**
 *
 * @param{number} storey
 * @return {number}
 */

function solution(storey) {
  let answer = 0;
  const arr = [];
  while (storey !== 0) {
    arr.push(storey % 10);
    storey = Math.floor(storey / 10);
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] >= 10) {
      if (i + 1 < arr.length) {
        arr[i + 1] += 1;
      } else {
        answer += 1;
      }
    } else if (arr[i] < 5) {
      answer += arr[i];
    } else if (arr[i] > 5) {
      answer += 10 - arr[i];
      if (i + 1 < arr.length) {
        arr[i + 1] += 1;
      } else {
        answer += 1;
      }
    } else if (arr[i] === 5) {
      answer += arr[i];
      if (i + 1 < arr.length && arr[i + 1] >= 5) {
        arr[i + 1] += 1;
      }
    } else {
      return -1;
    }
  }
  return answer;
}

console.log(solution(16));
console.log(solution(2554));
console.log(solution(1000)); // 1
console.log(solution(56)); // 9
console.log(solution(155)); // 11
console.log(solution(55)); // 10
console.log(solution(75)); // 8
console.log(solution(555)); // 14
