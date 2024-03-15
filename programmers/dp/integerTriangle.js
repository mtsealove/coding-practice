/**
 *
 * @param{number[][]} triangle
 * @return {number}
 */
function solution(triangle) {
  for (let i = 0; i < triangle.length; i += 1) {
    if (i !== 0) {
      const prev = triangle[i - 1];
      const line = triangle[i];
      for (let j = 0; j < line.length; j += 1) {
        let left = 0;
        if (j !== 0) {
          left = prev[j - 1];
        }
        let right = 0;
        if (prev.length > j) {
          right = prev[j];
        }
        triangle[i][j] += Math.max(left, right);
      }
    }
  }
  const last = triangle[triangle.length - 1]
    .sort((a, b) => b - a);
  return last[0];
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
