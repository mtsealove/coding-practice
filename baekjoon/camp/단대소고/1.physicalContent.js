const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// n팀 참가, 팀별 m명의 인원, 남은 사람이 총 a 명, 내 팀에서 k명 남음
// 이때 내 팀이 가질 수 있는 등수의 최대, 최소
const [n, m, a, k] = input[0].split(' ').map(Number);
const worst = Math.min(a - k, n);
console.log(worst);
console.log(n, m, a, k);
