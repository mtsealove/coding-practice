/**
 *
 * @param{string} number
 * @param{number} k
 * @return {string}
 */
function solution(number, k) {
  let stack = []; // 숫자를 넣을 배열
  for (const num of number) {
    // 마지막 원소가 넣을 원소보다 작고 뺄 개수가 끝나지 않았을 때 마지막 원소 제거
    while (stack.length !== 0 && stack[stack.length - 1] < num && k > 0) {
      stack.pop();
      k -= 1;
    }
    stack.push(num); // 모든 수를 스택에 삽입
  }
  stack = stack.slice(0, number.length - k); // 원소의 개수가 많을 수도 있어 제거
  return stack.join('');
}

console.log(solution('1924', 2));
console.log(solution('1231234', 3));
console.log(solution('4177252841', 4));

/*
그리디 알고리즘을 통한 풀이
 */
