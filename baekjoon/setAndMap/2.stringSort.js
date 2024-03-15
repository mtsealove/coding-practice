const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n] = input[0].split(' ').map(Number);
const set = new Set(input.filter((_, i) => i > 0 && i <= n));
const words = input.filter((_, i) => i > n);
console.log(words.filter((w) => set.has(w)).length);
