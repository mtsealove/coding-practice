const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const words = input
  .filter((_, i) => i > 0);

words.forEach((word) => {
  console.log(`${word.charAt(0)}${word.charAt(word.length - 1)}`);
});
