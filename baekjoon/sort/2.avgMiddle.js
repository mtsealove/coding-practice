const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const nums = input.map((n) => Number(n));
const avg = nums.reduce((a, b) => a + b) / 5;
const middle = nums.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return -1;
  }
  return 0;
})[2];

console.log(avg);
console.log(middle);
