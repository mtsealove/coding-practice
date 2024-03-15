/**
 *
 * @param{number[]} numbers
 * @return {*[]}
 */
function solution(numbers) {
  const answer = [];
  for (const n of numbers) {
    if (n % 2 === 0) {
      answer.push(n + 1);
    } else {
      const binary = n.toString(2);
      const position = binary.lastIndexOf('0');
      if (position === -1) {
        answer.push(parseInt(`10${binary.slice(1)}`, 2));
      } else {
        answer.push(parseInt(`${binary.slice(0, position)}10${binary.slice(position + 2)}`, 2));
      }
    }
  }
  return answer;
}

console.log(solution([2, 7]));
