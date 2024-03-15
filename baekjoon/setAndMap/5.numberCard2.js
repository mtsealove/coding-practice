const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const map = new Map();
input[1].split(' ').map(Number)
  .forEach((n) => {
    const og = map.get(n);
    if (og !== undefined) {
      map.set(n, og + 1);
    } else {
      map.set(n, 1);
    }
  });
console.log(input[3].split(' ').map(Number)
  .map((n) => map.get(n) || 0).join(' '));
