/*
도현이는 바구니를 총 N개 가지고 있고, 각각의 바구니에는 1번부터 N번까지 번호가 순서대로 적혀져 있다.
 바구니는 일렬로 놓여져 있고, 가장 왼쪽 바구니를 1번째 바구니, 그 다음 바구니를 2번째 바구니, ..., 가장 오른쪽 바구니를 N번째 바구니라고 부른다.

도현이는 앞으로 M번 바구니의 순서를 역순으로 만들려고 한다.
 도현이는 한 번 순서를 역순으로 바꿀 때, 순서를 역순으로 만들 범위를 정하고,
  그 범위에 들어있는 바구니의 순서를 역순으로 만든다.

바구니의 순서를 어떻게 바꿀지 주어졌을 때, M번 바구니의 순서를 역순으로 만든 다음,
 바구니에 적혀있는 번호를 가장 왼쪽 바구니부터 출력하는 프로그램을 작성하시오.
 */

const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0]
  .split(' ')
  .map((n) => Number(n));

const arr = Array.from({ length: N })
  .map((_, i) => i + 1);

const lines = input
  .filter((_, i) => i > 0)
  .map((line) => line.split(' ').map((n) => Number(n) - 1));

lines.forEach(([i, j]) => {
  const cp = arr.slice(i, j + 1).reverse();
  for (let x = 0; x < cp.length; x += 1) {
    arr[i + x] = cp[x];
  }
});

console.log(arr.join(' '));
