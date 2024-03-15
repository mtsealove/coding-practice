const solution = (num) => {
  const monthes = new Map();
  const answer = 0;
  const yearDate = Array.from({ length: 10 })
    .map((_, n) => 2 ** (n + 1))
    .reduce((a, b) => a + b);

  console.log(yearDate);

  console.log(Math.floor(num / 1200));
  console.log((num / 1200) % yearDate);
  return answer;
};

console.log(solution(14000605));
console.log(solution(1200202));
