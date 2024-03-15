const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [num, type] = input[0].split(' ');
const alphabets = Array.from({ length: 26 })
  .map((_, n) => String.fromCharCode(65 + n));
const parsed = num.split('') // 문자열 분리
  .map((n, i) => {
    const idx = alphabets.indexOf(n); // 알파벳이면 해당 값의 인덱스를 값으로 사용
    const value = idx === -1 ? Number(n) : idx + 10; // 아니면 해당 수를 그대로 사용
    return value * (type ** (num.length - i - 1)); // 자리수 곱하기
  }).reduce((a, b) => a + b);

// 시간복잡도 O(n^2)

console.log(parsed);
