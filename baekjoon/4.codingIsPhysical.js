const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [num] = input.map((n) => Number(n));

console.log(`${Array.from({ length: num / 4 })
  .map((_) => 'long')
  .reduce((a, b) => `${a} ${b}`)} int`);
