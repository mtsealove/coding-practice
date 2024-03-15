const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const result = input.filter((_, i) => i > 0)
  .map((line) => line.split(' ').map(Number))
  .sort(([ax, ay], [bx, by]) => {
    if (ax > bx) {
      return 1;
    }
    if (bx > ax) {
      return -1;
    }
    if (ay > by) {
      return 1;
    }
    if (by > ay) {
      return -1;
    }
    return 0;
  }).map(([x, y]) => `${x} ${y}`)
  .reduce((a, b) => `${a}\n${b}`);

console.log(result);
