/**
 *
 * @param{string[]} genres
 * @param{number[]} plays
 * @return {number[]}
 */

function solution(genres, plays) {
  const answer = [];
  const map = new Map();
  const count = new Map();
  for (let i = 0; i < genres.length; i += 1) {
    map.set(genres[i], (map.get(genres[i]) || 0) + plays[i]);
    count.set(genres[i], (count.get(genres[i]) || 0) + 1);
  }
  const arr = genres.map((v, i) => [v, i, plays[i], count.get(v), map.get(v)])
    .sort((a, b) => {
      if (a[4] > b[4]) {
        return -1;
      }
      if (a[4] < b[4]) {
        return 1;
      }
      if (a[3] > b[3]) {
        return -1;
      }
      if (a[3] < b[3]) {
        return 1;
      }
      if (a[2] > b[2]) {
        return -1;
      }
      if (a[2] < b[2]) {
        return 1;
      }
      return a[1] - b[1];
    });
  const add = new Map();
  for (const [g, i] of arr) {
    const og = (add.get(g) || 0);
    if (og !== 2) {
      answer.push(i);
      add.set(g, og + 1);
    }
  }
  return answer;
}

console.log(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]));
