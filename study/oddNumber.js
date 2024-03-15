// import L from 'fxjs/Lazy';
// const C = require('fxjs/')

/**
 * 명령형 프로그램으로 구하기
 * @param{number} limit
 * @param{number[]} list
 */

function f1(limit, list) {
  let acc = 0;
  for (const a of list) {
    if (a % 2) {
      const b = a * a;
      acc += b;
      limit -= 1;
      if (limit === 0) {
        break;
      }
    }
  }
  console.log(acc);
}

f1(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/* 문장으로 되어 있는 코드를 리스트 프로세싱하여 프로래밍하는 법
 1. if를 filter로 -> 필터된 리스트에서만 프로세싱을 수행하게 됨
2. 값 변화 후 변수 할당을 map으로
3. break 을 take로
4. 축약 및 합산을 reduce로
이런 것들이 함수형 프로그래밍
 -> 읽기가 쉬움
 */

/**
 *
 * @param{number} limit
 * @param{number[]} list
 */
function f2(limit, list) {
  const acc = list.filter((n) => n % 2)
    .map((n) => n ** 2)
    .slice(0, limit)
    .reduce((a, b) => a + b, 0);
  console.log(acc);
}

f2(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

