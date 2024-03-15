const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const set = new Set();
input.filter((_, i) => i > 0)
  .forEach((v) => {
    set.add(v);
  });
const arr = [];
set.forEach((v) => {
  arr.push(v);
});
const result = arr.sort((a, b) => {
  if (a.length > b.length) {
    return 1;
  }
  if (b.length > a.length) {
    return -1;
  }
  return a.localeCompare(b);
}).reduce((a, b) => `${a}\n${b}`);

console.log(result);
