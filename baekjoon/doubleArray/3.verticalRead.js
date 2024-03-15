const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const wordMap = input.map((line) => {
  const arr = line.split('');
  const { length } = arr;
  for (let i = 0; i < 15 - length; i += 1) {
    arr.push('');
  }
  return arr;
});
// console.log(wordMap);
let answer = '';
for (let x = 0; x < 15; x += 1) {
  for (let y = 0; y < 5; y += 1) {
    const value = wordMap[y][x];
    answer += value;
  }
}

console.log(answer);
console.log(answer === 'Aa0aPAf985Bz1EhCz2W3D1gkD6x');
