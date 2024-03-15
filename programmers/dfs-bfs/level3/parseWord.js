/**
 *
 * @param{string} begin
 * @param{string} target
 * @param{string[]} words
 * @return {number}
 */
function solution(begin, target, words) {
  let answer = 0;
  if (words.indexOf(target) === -1) {
    return 0;
  }
  while (begin !== target) {
    const r = parseStr(words, target, begin);
    begin = r[0];
    words = r[1];
    answer += 1;
  }
  return answer;
}

/**
 *
 * @param{string[]} words
 * @param{string} target
 * @param{string} current
 */
function parseStr(words, target, current) {
  const beginSplit = [...current];
  const targetSp = [...target];
  const parsed = words.filter((w) => w !== current)
    .map((w) => {
      const sp = [...w];
      let diff = 0;
      for (let i = 0; i < current.length; i += 1) {
        diff += beginSplit[i] !== sp[i] ? 1 : 0;
      }
      let diff2 = 0;
      for (let i = 0; i < current.length; i += 1) {
        diff2 += targetSp[i] !== sp[i] ? 1 : 0;
      }
      return [w, diff, diff2];
    })
    .sort((a, b) => {
      if (a[1] > b[1]) {
        return 1;
      } if (a[1] < b[1]) {
        return -1;
      }
      return a[2] - b[1];
    });
  const first = parsed[0][0];
  current = first;
  words = words.filter((v) => v !== first);
  return [current, words];
}

console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']));
console.log(solution('hit', 'hot', ['hit', 'hot', 'lot']));
