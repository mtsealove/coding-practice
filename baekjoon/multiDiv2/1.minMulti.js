const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const nums = input.filter((_, i) => i > 0)
  .map((line) => line.split(' ').map(Number));

const gcd = (a, b) => {
  let r;
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
};

const lcm = (a, b) => (a * b) / gcd(a, b);
console.log(nums.map(([x, y]) => lcm(x, y)).join('\n'));
