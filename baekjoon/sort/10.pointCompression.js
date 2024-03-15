const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const points = input[1].split(' ')
  .map(Number);
// 중복 제거 후 정렬
const set = new Set(points);
const map = new Map();
const sorted = [...set].sort((a, b) => a - b);
// 순서를 맵 형태로 저장
sorted.forEach((s, i) => {
  map.set(s, i);
});
// map 에서 순서를 가져옴
const result = points.map((x) => map.get(x)).join(' ');
console.log(result);
