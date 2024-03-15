/**
 *
 * @param{number[][]} maps
 * @return {number}
 */
function solution(maps) {
  const NOT_ENABLE = 2;
  const n = maps[0].length - 1;
  const m = maps.length - 1;
  const queue = [[0, 0, 1]]; // BFS 이기 때문에 queue 형식 사용
  while (queue.length > 0) {
    const [x, y, move] = queue.shift();
    if (x === n && y === m) { // 최종 목적지에 도달한 경우
      return move;
    }
    if (maps[y][x] === 1) { // x, y가 움직일 수 있는 공간일 경우 실행(이미 지나가지 않은 공간)
      maps[y][x] = NOT_ENABLE;
      if (x - 1 >= 0 && maps[y][x - 1] !== NOT_ENABLE) queue.push([x - 1, y, move + 1]);
      if (x + 1 <= n && maps[y][x + 1] !== NOT_ENABLE) queue.push([x + 1, y, move + 1]);
      if (y - 1 >= 0 && maps[y - 1][x] !== NOT_ENABLE) queue.push([x, y - 1, move + 1]);
      if (y + 1 <= m && maps[y + 1][x] !== NOT_ENABLE) queue.push([x, y + 1, move + 1]);
      // 이동할 수 있는 곳이 있는지 파악
    }
  }
  return -1;
}

console.log(solution([[1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1]]));
console.log(solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]]));
