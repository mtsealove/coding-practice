/**
 *
 * @param{number[][]} users
 * @param{number[]} emoticons
 * @return {number[]}
 */
function solution(users, emoticons) {
  // 이모티콘 할인률 고정
  const discounts = [10, 20, 30, 40];
  // 할인된 금액 미리 계산
  const discountedPrices = emoticons.map((n) => discounts.map((d, i) => [((100 - d) * n) / 100, (i + 1) * 10]));
  let result = [];
  const arrs = generatePermutations(emoticons.length);
  for (const arr of arrs) {
    dfs(result, discountedPrices, users, arr);
  }
  result = result.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return b[0] - a[0];
  });
  return result[0];
}

function generatePermutations(n) {
  const permutations = [];
  function generateHelper(currentPermutation) {
    if (currentPermutation.length === n) {
      permutations.push(currentPermutation.slice());
      return;
    }
    for (let i = 0; i < 4; i += 1) {
      currentPermutation.push(i);
      generateHelper(currentPermutation);
      currentPermutation.pop();
    }
  }
  generateHelper([]);
  return permutations;
}

function dfs(result, discountedPrices, users, arr) {
  let totalSum = 0;
  let totalPlus = 0;
  for (const [rate, pivot] of users) {
    let personalSum = 0;
    const mapped = discountedPrices.map((v, i) => v[arr[i]]);
    mapped.forEach(([price, r]) => {
      if (r >= rate) {
        personalSum += price;
      }
    });
    if (personalSum >= pivot) {
      totalPlus += 1;
    } else {
      totalSum += personalSum;
    }
  }
  result.push([totalPlus, totalSum]);
}

console.time();
console.log(solution([[40, 10000], [25, 10000]], [7000, 9000]));
console.log(solution(
  [[40, 2900], [23, 10000], [11, 5200], [5, 5900], [40, 3100], [27, 9200], [32, 6900]],
  [1300, 1500, 1600, 4900],
));
console.timeEnd();
