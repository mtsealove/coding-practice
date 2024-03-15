const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n] = input[0].split(' ').map(Number);
const pocketmons = input.filter((_, i) => i > 0 && i <= n);
const questions = input.filter((_, i) => i > n);
const numberMap = new Map();
const nameMap = new Map();
pocketmons.forEach((name, idx) => {
  numberMap.set(name, idx + 1);
  nameMap.set(idx + 1, name);
});

questions.forEach((q) => {
  const num = Number(q);
  if (Number.isNaN(num)) {
    console.log(numberMap.get(q));
  } else {
    console.log(nameMap.get(num));
  }
});
