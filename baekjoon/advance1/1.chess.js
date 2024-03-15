const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const matches = [1, 1, 2, 2, 2, 8];
console.log(input[0]
  .split(' ')
  .map((n, i) => matches[i] - Number(n))
  .join(' '));
