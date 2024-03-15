const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [num, type] = input[0].split(' ').map((n) => Number(n));

let current = num;
let result = '';

while (current > 0) {
  if (current % type < 10) {
    result += current % type;
  } else {
    result += (String.fromCharCode((current % type) + 55));
  }
  current = Math.floor(current / type);
}

console.log(result.split('').reverse().join(''));
