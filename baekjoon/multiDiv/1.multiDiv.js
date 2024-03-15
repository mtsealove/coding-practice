/*
4 × 3 = 12이다.

이 식을 통해 다음과 같은 사실을 알 수 있다.

3은 12의 약수이고, 12는 3의 배수이다.

4도 12의 약수이고, 12는 4의 배수이다.

두 수가 주어졌을 때, 다음 3가지 중 어떤 관계인지 구하는 프로그램을 작성하시오.

첫 번째 숫자가 두 번째 숫자의 약수이다.
첫 번째 숫자가 두 번째 숫자의 배수이다.
첫 번째 숫자가 두 번째 숫자의 약수와 배수 모두 아니다.
 */

const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const cases = input
  .filter((_, i) => i !== input.length - 1)
  .map((line) => line.split(' ').map((n) => Number(n)));
// console.log(cases);
cases.forEach(([n1, n2]) => {
  if (n1 !== 0 && n2 % n1 === 0) {
    console.log('factor');
  } else if (n2 !== 0 && n1 % n2 === 0) {
    console.log('multiple');
  } else {
    console.log('neither');
  }
});
