function solution(n) {
  const answer = [];
  hanoi(n, 1, 3, 2, answer);
  return answer;
}

function hanoi(n, start, end, sub, arr) {
  if (n === 1) {
    arr.push([start, end]);
    return;
  }
  hanoi(n - 1, start, sub, end, arr);
  arr.push([start, end]);
  hanoi(n - 1, sub, end, start, arr);
}

console.log(solution(2));
