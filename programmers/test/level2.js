function solution(n, words) {
  const set = new Set();
  let prev = words[0];
  set.add(words[0]);
  for (let i = 1; i < words.length; i += 1) {
    const person = (i % n) + 1;
    const turn = Math.floor(i / n) + 1;
    if (set.has(words[i]) || prev[prev.length - 1] !== words[i][0]) {
      return [person, turn];
    }
    set.add(words[i]);
    prev = words[i];
  }
  return [0, 0];
}

console.log(solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']));
console.log(solution(5, ['hello', 'observe', 'effect', 'take', 'either', 'recognize', 'encourage', 'ensure', 'establish', 'hang', 'gather', 'refer', 'reference', 'estimate', 'executive']));
console.log(solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']));
