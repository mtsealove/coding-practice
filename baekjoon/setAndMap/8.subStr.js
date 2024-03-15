const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const str = input[0];
const set = new Set();
for (let i = 0; i < str.length; i += 1) {
  for (let j = str.length; j >= i; j -= 1) {
    set.add(str.slice(i, j + 1));
  }
}

console.log(set.size);
