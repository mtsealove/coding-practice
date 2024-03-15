/**
 *
 * @param{string[]} board
 * @return {number}
 */
function solution(board) {
  const visited = Array.from({ length: board.length }, () => Array.from({ length: board[0].length }, () => false));
  const xLength = board[0].length;
  const yLength = board.length;
  const queue = [];
  let dest;
  board.forEach((v, i) => {
    if (v.indexOf('R') !== -1) {
      queue.push([i, v.indexOf('R'), 0]);
    }
    if (v.indexOf('G') !== -1) {
      dest = [i, v.indexOf('G')];
    }
  });

  while (queue.length !== 0) {
    console.log(queue);
    const [x, y, c] = queue.shift();
    if (dest[0] === x && dest[1] === y) {
      return c;
    }
    visited[x][y] = true;
    let xx = x;
    let yy = y;
    while (xx) {
      if (board[xx - 1][y] === 'D') break;
      xx -= 1;
    }
    if (!visited[xx][y]) queue.push([xx, y, c + 1]);
    xx = x;
    while (xx < yLength - 1) {
      if (board[xx + 1][y] === 'D') break;
      xx += 1;
    }
    if (!visited[xx][y]) queue.push([xx, y, c + 1]);
    // 좌
    while (yy) {
      if (board[x][yy - 1] === 'D') break;
      yy -= 1;
    }
    if (!visited[x][yy]) queue.push([x, yy, c + 1]);
    // 우
    yy = y;
    while (yy < xLength - 1) {
      if (board[x][yy + 1] === 'D') break;
      yy += 1;
    }
    if (!visited[x][yy]) queue.push([x, yy, c + 1]);
  }
  return -1;
}

console.log(solution(['...D..R', '.D.G...', '....D.D', 'D....D.', '..D....']));
