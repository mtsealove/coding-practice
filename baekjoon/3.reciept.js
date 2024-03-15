const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const total = Number(input[0]);
const cat = Number(input[1]);
const others = input.filter((a, idx) => idx > 1);

if (others.length !== cat) { // 개수 확인
  console.log('No');
} else {
  const sum = others.map((l) => {
    const [price, cnt] = l.split(' ')
      .map((n) => Number(n));
    return price * cnt;
  }).reduce((a, b) => a + b);
  console.log(sum === total ? 'Yes' : 'No');
}
