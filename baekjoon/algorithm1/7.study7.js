/*
오늘도 서준이는 점근적 표기 수업 조교를 하고 있다. 아빠가 수업한 내용을 학생들이 잘 이해했는지 문제를 통해서 확인해보자.
알고리즘의 소요 시간을 나타내는 O-표기법(빅-오)을 다음과 같이 정의하자.
O(g(n)) = {f(n) | 모든 n ≥ n0에 대하여 f(n) ≤ c × g(n)인 양의 상수 c와 n0가 존재한다}
이 정의는 실제 O-표기법(https://en.wikipedia.org/wiki/Big_O_notation)과 다를 수 있다.
함수 f(n) = a1n + a0, 양의 정수 c, n0가 주어질 경우 O(n) 정의를 만족하는지 알아보자.
 */

const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [a1, a0] = input[0].split(' ').map((n) => Number(n));
const [c, n0] = input.filter((_, i) => i > 0)
  .map((n) => Number(n));

console.log(a1, a0);
console.log(c, n0);

function fn(n) {
  return a1 * n + a0;
}
function gn(n) {
  return c * n;
}

let result = 1;
for (let i = n0; i < Number.MAX_VALUE; i += 1) {
  if (fn(i) >= gn(i)) {
    result = 0;
    break;
  } else {
      console.log(i);
  }
}

console.log(result);
