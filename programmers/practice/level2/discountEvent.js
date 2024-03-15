/**
 *
 * @param{string[]} want
 * @param{number[]} number
 * @param{string[]} discount
 * @return {number}
 */

function solution(want, number, discount) {
  let answer = 0;
  // 하나씩 제거해감
  const map = new Map();
  for (let i = 0; i < want.length; i += 1) {
    map.set(want[i], number[i]);
  }
  for (let i = 0; i < discount.length - 9; i += 1) {
    const cMap = new Map(map); // 맵 복사로 사용
    for (let j = 0; j < 10; j += 1) {
      const item = discount[j + i];
      cMap.set(item, (cMap.get(item) || 0) - 1); // 수량 제거
    }
    let over = false;
    cMap.forEach((v) => { // 남은 것 체크
      if (v > 0) {
        over = true;
      }
    });
    if (!over) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution(
  ['banana', 'apple', 'rice', 'pork', 'pot'],
  [3, 2, 2, 2, 1],
  ['chicken', 'apple', 'apple', 'banana', 'rice', 'apple', 'pork', 'banana', 'pork', 'rice', 'pot', 'banana', 'apple', 'banana'],
));

console.log(solution(
  ['apple'],
  [10],
  ['banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana'],
));
