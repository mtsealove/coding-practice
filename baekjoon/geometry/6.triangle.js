/*
창영이는 삼각형의 종류를 잘 구분하지 못한다. 따라서 프로그램을 이용해 이를 외우려고 한다.

삼각형의 세 각을 입력받은 다음,

세 각의 크기가 모두 60이면, Equilateral
세 각의 합이 180이고, 두 각이 같은 경우에는 Isosceles
세 각의 합이 180이고, 같은 각이 없는 경우에는 Scalene
세 각의 합이 180이 아닌 경우에는 Error
를 출력하는 프로그램을 작성하시오.
 */

const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function bootstrap() {
  const angles = input.map((n) => Number(n));
  // 세각 오류 처리
  if (angles.reduce((a, b) => a + b) !== 180) {
    return 'Error';
  }
  const map = new Map();
  angles.forEach((angle) => {
    map.set(angle, true);
  });
  switch (map.size) {
    case 1:
      return 'Equilateral';
    case 2:
      return 'Isosceles';
    default:
      return 'Scalene';
  }
}

console.log(bootstrap());
