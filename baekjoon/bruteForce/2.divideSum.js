const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = Number(input[0]);

const isConstructor = (v, sum) => `${v}`.split('')
  .map((i) => Number(i))
  .reduce((a, b) => a + b) + v === sum;

const solution = () => {
  for (let i = 1; i <= n; i += 1) {
    if (isConstructor(i, n)) {
      console.log(i);
      return;
    }
  }
  console.log(0);
};

solution();
