/*
선택정렬
가장 작은 갚을 뽑아서 정렬
 */

const a = [10, 11, 9, 2, 3, 6, 5, 4];
const b = [];
const { length } = a;

for (let i = 0; i < length; i += 1) {
  const min = Math.min.apply(null, a);
  b.push(min);
  a.splice(a.indexOf(min), 1);
}

console.log(b);
