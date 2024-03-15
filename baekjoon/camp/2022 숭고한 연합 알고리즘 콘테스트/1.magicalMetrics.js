/*
L x L 행렬에 L^2개의 알파벳을 적어 가로로 읽었을 때와 세로로 읽었을 때 얻는 단어들과
그 순서가 서로 같은 경우 우리는 이러한 행렬을 단어 마방진이라고 부른다.
예를 들어, 다음 행렬은
$5 \times 5$ 단어 마방진이다.
 */

const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [l, n] = input[0].split(' ').map(Number);
const board = input.filter((_, i) => i > 0)
  .map((line) => line.split(''));

console.log(l, n);
console.log(board);
