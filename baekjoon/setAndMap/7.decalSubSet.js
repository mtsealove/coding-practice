const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);
const aSet = new Set(a);
const bSet = new Set(b);

const ab = a.filter((n) => !bSet.has(n));
const ba = b.filter((n) => !aSet.has(n));
const total = new Set();
ab.forEach((v) => total.add(v));
ba.forEach((v) => total.add(v));
console.log(total.size);
