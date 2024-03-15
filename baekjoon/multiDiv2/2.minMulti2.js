const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n1, n2] = input[0].split(' ').map(Number);

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
console.log(lcm(n1, n2));
