function f3(end) {
  let i = 0;
  while (i < end) {
    console.log(i);
    i += 1;
  }
}
// f3(10);

const _ = require('fxjs');
const L = require('fxjs/Lazy');

/*
each 함수 해당 함수를 인자를 넣고 이터러블하게 수행
 */

function f4(end) {
  _.go(
    L.range(1, end, 2),
    _.each(console.log),
  );
}

// f4(10);

/*
별그리기
 */
function f5() {
  _.go(
    L.range(1, 6),
    L.map(L.range),
    L.map(L.map(() => '*')),
    L.map(_.reduce((a, b) => `${a}${b}`)),
    _.reduce((a, b) => `${a}\n${b}`),
    console.log,
  );
}

// f5();
/* 구구단 */

function f6() {
  _.go(
    _.range(2, 10),
    _.map((a) => _.go(
      _.range(1, 10),
      _.map((b) => `${a}x${b} = ${a * b}`),
    )),
    console.log,
  );
}

f6();
