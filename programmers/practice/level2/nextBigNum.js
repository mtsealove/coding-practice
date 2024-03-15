/**
 * @param{number[]} numbers
 * @return {*[]}
 */
function solution(numbers) {
  const answer = Array.from({ length: numbers.length })
    .map((_) => -1);
  const stack = [];
  for (let i = numbers.length - 1; i >= 0; i -= 1) {
    // 스택이 비어있지 않고 마지막 원소보다 크거나 작으면
    // 마지막 원소 삭제
    while (stack.length !== 0 && numbers[i] >= stack[stack.length - 1]) {
      stack.pop();
    }
    if (stack.length !== 0) { // 스택이 비지 않으면 값 추가
      answer[i] = stack[stack.length - 1];
    }
    stack.push(numbers[i]);
  }
  return answer;
}

console.log(solution([2, 3, 3, 5])); // [3, 5, 5, -1]
console.log(solution([9, 1, 5, 3, 6, 2])); // [-1, 5, 6, 6, -1, -1]
