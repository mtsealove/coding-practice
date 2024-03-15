/**
 *
 * @param{string} numbers
 * @return {number}
 */
function solution(numbers) {
  const nums = numbers.split('').map(Number);
  const set = new Set();
  for (let i = 1; i <= nums.length; i += 1) {
    const mutation = getPermutation(nums, i)
      .map((a) => Number(a.join('')));
    mutation.forEach((n) => {
      if (isPrime(n)) {
        set.add(n);
      }
    });
  }
  return set.size;
}

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const getPermutation = (arr, num) => {
  const res = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const permutations = getPermutation(rest, num - 1);
    const attach = permutations.map((permutation) => [v, ...permutation]);
    res.push(...attach);
  });
  return res;
};

console.log(solution('17'));
console.log(solution('011'));
