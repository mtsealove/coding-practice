const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map((n) => Number(n));
const values = input.filter((_, i) => i > 0)
  .map((line) => line.split(' ').map((n) => Number(n)));

// console.log(values);
const first = values.filter((_, i) => i < N);
const second = values.filter((_, i) => i >= N);
// console.log(first);
// console.log(second);
const result = [];
for (let i = 0; i < N; i += 1) {
  const line = [];
  for (let j = 0; j < M; j += 1) {
    line.push(first[i][j] + second[i][j]);
  }
  result.push(line);
}
// console.log('-------');
result.forEach((line) => {
  console.log(line.join(' '));
});
