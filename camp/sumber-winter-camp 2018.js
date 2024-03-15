/**
 *
 * @param{string} dirs
 * @return {number}
 */
function solution(dirs) {
  const moves = dirs.split('');
  const set = new Set();
  let x = 0;
  let y = 0;
  moves.forEach((n) => {
    const move = `${x}${y}`;
    let enable = false;
    switch (n) {
      case 'U':
        if (y < 5) {
          y += 1;
          enable = true;
        }
        break;
      case 'D':
        if (y > -5) {
          y -= 1;
          enable = true;
        }
        break;
      case 'L':
        if (x > -5) {
          x -= 1;
          enable = true;
        }
        break;
      default:
        if (x < 5) {
          x += 1;
          enable = true;
        }

        break;
    }
    if (enable) {
      set.add(`${move}${x}${y}`);
      set.add(`${x}${y}${move}`);
    }
  });
  return set.size / 2;
}

console.log(solution('ULURRDLLU'));
console.log(solution('LULLLLLLU'));
