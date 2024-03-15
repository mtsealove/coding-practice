const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const locations = input.filter((_, i) => i > 0)
  .map((line) => line.split(' ').map((num) => Number(num)));

const board = Array.from({ length: 100 })
  .map((_) => Array.from({ length: 100 })
    .map((_) => 0));

locations.forEach(([x, y]) => {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      board[i + x][j + y] = 1;
    }
  }
});

const answer = board.map((line) => line.reduce((a, b) => a + b))
  .reduce((a, b) => a + b);
console.log(answer);
