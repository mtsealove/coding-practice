const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const cases = input.filter((v) => v !== '-1')
  .map((v) => Number(v));

cases.forEach((n) => {
  const arr = Array.from({ length: n })
    .map((_, i) => i + 1)
    .filter((v) => n % v === 0 && v !== n);
  const sum = arr.reduce((a, b) => a + b);
  if (sum === n) {
    console.log(`${n} = ${arr.join(' + ')}`);
  } else {
    console.log(`${n} is NOT perfect.`);
  }
});
