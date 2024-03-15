/*
한수는 지금 (x, y)에 있다.
 직사각형은 각 변이 좌표축에 평행하고, 왼쪽 아래 꼭짓점은 (0, 0), 오른쪽 위 꼭짓점은 (w, h)에 있다.
  직사각형의 경계선까지 가는 거리의 최솟값을 구하는 프로그램을 작성하시오.
 */

const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [x, y, w, h] = input[0].split(' ').map((n) => Number(n));
const minX = Math.min(Math.abs(x - w), x);
const minY = Math.min(Math.abs(y - h), y);
console.log(Math.min(minY, minX));
