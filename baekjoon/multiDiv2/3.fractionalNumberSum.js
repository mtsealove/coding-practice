const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [a1, b1] = input[0].split(' ').map(Number);
const [a2, b2] = input[1].split(' ').map(Number);

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

let b = lcm(b1, b2);
let a = (a1 * b) / b1 + (a2 * b) / b2;
const l = gcd(a, b);
b /= l;
a /= l;

console.log(`${a} ${b}`);
