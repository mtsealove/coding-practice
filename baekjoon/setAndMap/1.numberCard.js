const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const cards = input[1].split(' ').map(Number);
const checks = input[3].split(' ').map(Number);
const map = new Map();
cards.forEach((c, i) => {
  map.set(c, i);
});
const result = checks.map((c) => (map.get(c) === undefined ? 0 : 1))
  .join(' ');

console.log(result);
