/**
 *
 * @param{number} m
 * @param{number} n
 * @param{number} puddles
 * @return {number}
 */
function solution(m, n, puddles) {
  const div = 1000000007;
  const arr = Array.from({ length: n })
    .map(() => Array.from({ length: m }).map(() => 1));
  for (const [x, y] of puddles) {
    if (x === 1) {
      for (let i = y - 1; i < n; i += 1) {
        arr[i][x - 1] = 0;
      }
    }
    if (y === 1) {
      for (let i = x - 1; i < m; i += 1) {
        arr[y - 1][i] = 0;
      }
    }
  }
  for (const [x, y] of puddles) {
    arr[y - 1][x - 1] = 0;
  }
  for (let x = 0; x < m; x += 1) {
    for (let y = 0; y < n; y += 1) {
      if (x < 1 || y < 1 || arr[y][x] === 0) {
        continue;
      }
      arr[y][x] = arr[y][x - 1] + arr[y - 1][x];
      arr[y][x] %= div;
    }
  }
  return arr[n - 1][m - 1];
}

console.log(solution(4, 3, [[2, 2]]));
