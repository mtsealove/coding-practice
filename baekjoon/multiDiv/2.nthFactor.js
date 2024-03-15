/*
첫째 줄에 N의 약수들 중 K번째로 작은 수를 출력한다.
 만일 N의 약수의 개수가 K개보다 적어서 K번째 약수가 존재하지 않을 경우에는 0을 출력하시오.
 */

const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map((x) => Number(x));
const arr = Array.from({ length: n })
  .map((_, i) => i + 1)
  .filter((v) => n % v === 0);
if (arr.length < k) {
  console.log(0);
} else {
  console.log(arr[k - 1]);
}
