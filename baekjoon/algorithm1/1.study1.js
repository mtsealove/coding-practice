const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 그냥 시간복잡도를 표시하는 문제

const n = Number(input[0]);

console.log(1);
console.log(0);
