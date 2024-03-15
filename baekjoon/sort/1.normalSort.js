const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const nums = input.filter((_, i) => i > 0)
  .map((n) => Number(n))
  .sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (b > a) {
      return -1;
    }
    return 0;
  });
nums.forEach((n) => {
  console.log(n);
});
