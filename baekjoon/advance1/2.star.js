const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [num] = input.map((n) => Number(n));

for (let i = 0; i < num; i += 1) {
  console.log('*'.repeat(i * 2 + 1).padStart(num + i, ' '));
}
for (let i = num - 2; i >= 0; i -= 1) {
  console.log('*'.repeat(i * 2 + 1).padStart(num + i, ' '));
}
