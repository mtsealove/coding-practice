/**
 *
 * @param{string[]} orders
 * @param{number[]} course
 * @return {*[]}
 */
function solution(orders, course) {
  const answer = [];
  const map = new Map();
  for (const order of orders) {
    for (const n of course) {
      // n개의 조합 생성
      const combs = getCombinations(order.split(''), n);
      for (const comb of combs) {
        // 조합별로 카운트 작성
        const join = comb.sort().join('');
        map.set(join, (map.get(join) || 0) + 1);
      }
    }
  }
  // 2개 이상인 것만 계산
  const arr = [...map].filter((a) => a[1] >= 2)
    .sort((a, b) => a[0].length - b[0].length);
  for (const n of course) {
    // 글자수가 n인것만 필터링 및 개수 내림차순 정렬
    const filtered = arr.filter((a) => a[0].length === n)
      .sort((a, b) => b[1] - a[1]);
    if (filtered.length !== 0) {
      const maxCount = filtered[0][1]; // 최대의 수 확인
      answer.push(...filtered.filter((a) => a[1] === maxCount)
        .map((a) => a[0]));
    }
  }
  return answer.sort();
}

const getCombinations = (array, selectNumber) => {
  const results = [];
  if (selectNumber === 1) {
    return array.map((element) => [element]);
  }
  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
};

console.log(solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]));
console.log(solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5]));
console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]));
