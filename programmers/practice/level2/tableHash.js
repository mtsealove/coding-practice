/**
 *
 * @param{number[][]} data
 * @param{number} col
 * @param{number} row_begin
 * @param{number} row_end
 * @return {number}
 */
function solution(data, col, row_begin, row_end) {
  const nums = [];
  const sorted = data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    }
    return a[col - 1] - b[col - 1];
  });
  for (let i = row_begin - 1; i < row_end; i += 1) {
    let sum = 0;
    for (const n of sorted[i]) {
      sum += n % (i + 1);
    }
    nums.push(sum);
  }
  return nums.reduce((a, b) => a ^ b, 0);
}

console.log(solution([[2, 2, 6], [1, 5, 10], [4, 2, 9], [3, 8, 3]], 2, 2, 3));
