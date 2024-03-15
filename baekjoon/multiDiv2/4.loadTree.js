const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const nums = input.filter((_, i) => i > 0)
  .map(Number)
  .sort((a, b) => a - b);

let distances = [];
for (let i = 0; i < nums.length - 1; i += 1) {
  distances.push(nums[i + 1] - nums[i]);
}
distances = [...new Set(distances)].sort((a, b) => a - b);

console.log(distances);

const gcd = (a, b) => {
  let r;
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
};

// 배치될 거리 계산
let gap = 1;
distances.forEach((d) => {
  gap = gcd(d, gap);
});
const totalDistance = nums[nums.length - 1] - nums[0];
console.log(totalDistance / gap - nums.length + 1);
