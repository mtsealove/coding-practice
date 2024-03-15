const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const lines = input.filter((_, i) => i > 0)
  .map((line) => line.split(' ').map(Number));

let sum = 0;
for (let i = 1; i <= n; i += 1) {
  let max = 0;
  console.log(`=========== ${i} ==========`);
  lines.forEach(([a, b]) => {
    const v = a * i + b;
    max = Math.max(v, max);
  });
  console.log(max);
  sum += max;
}
console.log(sum);
