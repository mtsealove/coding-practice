/*
세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위해서 필요한 네 번째 점을 찾는 프로그램을 작성하시오.
 */
const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const points = input.map((line) => line.split(' ').map((n) => Number(n)));
const xMap = new Map();
const yMap = new Map();

points.forEach(([x, y]) => {
  const xOg = xMap.get(x);
  if (xOg) {
    xMap.set(x, 2);
  } else {
    xMap.set(x, 1);
  }
  const yOg = yMap.get(y);
  if (yOg) {
    yMap.set(y, 2);
  } else {
    yMap.set(y, 1);
  }
});
let x = 0;
let y = 0;
for (const [k, v] of xMap) {
  if (v === 1) {
    x = k;
  }
}
for (const [k, v] of yMap) {
  if (v === 1) {
    y = k;
  }
}

console.log(x, y);
