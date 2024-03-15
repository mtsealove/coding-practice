/**
 *
 * @param{number[]} elements
 * @return {number}
 */
function solution(elements) {
  const set = new Set();
  for (let i = 1; i <= elements.length; i += 1) {
    if (i === 1) {
      for (const num of elements) {
        set.add(num);
      }
    } else {
      for (let j = 0; j < elements.length; j += 1) {
        const end = j + i;
        const arr = [];
        for (let x = j; x < end; x += 1) {
          arr.push(elements[x % elements.length]);
        }
        set.add(arr.reduce((a, b) => a + b));
      }
    }
  }
  return set.size;
}

console.log(solution([7, 9, 1, 1, 4]));
