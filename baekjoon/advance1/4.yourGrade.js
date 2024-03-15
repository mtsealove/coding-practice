const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const getScore = (grade) => {
  switch (grade) {
    case 'A+': return 4.5;
    case 'A0': return 4.0;
    case 'B+': return 3.5;
    case 'B0': return 3.0;
    case 'C+': return 2.5;
    case 'C0': return 2.0;
    case 'D+': return 1.5;
    case 'D0': return 1.0;
    default: return 0;
  }
};

const useAble = input.filter((i) => i.split(' ')[2] !== 'P'); // PF 과목 제거
const totalEngage = useAble.map((u) => Number(u.split(' ')[1]))
  .reduce((a, b) => a + b); // 총 수강 학점

const totalScore = useAble.map((u) => {
  const [_, engage, grade] = u.split(' ');
  return Number(engage) * getScore(grade);
}).reduce((a, b) => a + b); // 이수과목 합

console.log(totalScore / totalEngage);
