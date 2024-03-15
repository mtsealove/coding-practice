/*
두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여
만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다
(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다).
X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.

예를 들어, X = 3403이고 Y = 13203이라면,
 X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다.
 다른 예시로 X = 5525이고 Y = 1255이면 X와 Y의 짝꿍은
 X와 Y에서 공통으로 나타나는 2, 5, 5로 만들 수 있는 가장 큰 정수인 552입니다
 (X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없습니다.)
두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.

제한사항
3 ≤ X, Y의 길이(자릿수) ≤ 3,000,000입니다.
X, Y는 0으로 시작하지 않습니다.
X, Y의 짝꿍은 상당히 큰 정수일 수 있으므로, 문자열로 반환합니다.
 */
/**
 *
 * @param{string} X
 * @param{string} Y
 * @returns {string}
 */
function solution(X, Y) {
  const x = X.split('').map((n) => Number(n)).sort();
  const y = Y.split('').map((n) => Number(n)).sort();
  const xMap = new Map();
  for (const num of x) {
    const og = xMap.get(num);
    if (typeof og === 'number') {
      xMap.set(num, og + 1);
    } else {
      xMap.set(num, 1);
    }
  }
  const keys = [];
  const rsMap = new Map(); // 공존하는 수와 개수를 담는 맵
  for (const num of y) {
    const leave = xMap.get(num);
    if (typeof leave === 'number') { // 존재 확인
      xMap.set(num, leave - 1);

      if (keys.indexOf(num) === -1) {
        keys.push(num);
      }
      const og = rsMap.get(num);
      if (typeof og === 'number') {
        rsMap.set(num, og + 1);
      } else {
        rsMap.set(num, 1);
      }
    }
  }
  if (rsMap.size === 0) {
    return '-1';
  }
  // console.log(rsMap);
  return `${Number(keys.reverse().map((key) => `${key}`.repeat(rsMap.get(key))).join(''))}`;
}

console.log(solution('100', '2345'));
console.log(solution('100', '203045'));
console.log(solution('100', '123450'));
console.log(solution('12321', '42531'));
console.log(solution('5525', '1255'));
