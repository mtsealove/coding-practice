const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n] = input[0].split(' ').map(Number);
const noHear = new Set(input.filter((_, i) => i > 0 && i <= n));
const result = input.filter((v, i) => i > n && noHear.has(v));
console.log(result.length);
console.log(result.sort().join('\n'));
