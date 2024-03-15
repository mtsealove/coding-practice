const _ = require('fxjs');
const L = require('fxjs/Lazy');

const users = [
  { name: 'AA', age: 10 },
  { name: 'BB', age: 20 },
  { name: 'CC', age: 30 },
  { name: 'DD', age: 40 },
  { name: 'EE', age: 50 },
];

// 여러 줄의 코드를 이용해 처리
const user = _.find((u) => u.name === 'DD', users);
if (user) {
  console.log(user);
}

// 한줄의 코드로 처리
// 에러가 나지 않게 each 처리를 한 것으로 확인
_.each(
  console.log,
  L.take(1, L.filter((u) => u.name === 'BB', users)),
);
