function solution(n, m, x, y, queries) {
  let answer = 0;
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      const point = [j, i];
      for (const query of queries) {
        queryFunc(point, query, n, m);
      }
      if (point[1] === x && point[0] === y) {
        answer += 1;
      }
    }
  }
  return answer;
}

function queryFunc(point, query, n, m) {
  const [dir, dx] = query;
  switch (dir) {
    case 0:
      point[0] = Math.max(point[0] - dx, 0);
      break;
    case 1:
      point[0] = Math.min(point[0] + dx, m - 1);
      break;
    case 2:
      point[1] = Math.max(point[1] - dx, 0);
      break;
    default:
      point[1] = Math.min(point[1] + dx, n - 1);
  }
}

console.log(solution(2, 2, 0, 0, [[2, 1], [0, 1], [1, 1], [0, 1], [2, 1]]));
console.log(solution(2, 5, 0, 1, [[3, 1], [2, 2], [1, 1], [2, 3], [0, 1], [2, 1]]));

