const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [_, nums, num] = input;
num = Number(num);
nums = nums.split(' ').map((n) => Number(n));
console.log(nums.filter((n) => n === num).length);
