const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const matrix = input.map((line) => line.split(' ').map((n) => Number(n)));

let maxNum = -1;
let maxI = 0;
let maxJ = 0;

for (let i = 0; i < 9; i += 1) {
  for (let j = 0; j < 9; j += 1) {
    if (matrix[i][j] > maxNum) {
      maxNum = matrix[i][j];
      maxI = i + 1;
      maxJ = j + 1;
    }
  }
}

console.log(maxNum);
console.log(maxI, maxJ);
