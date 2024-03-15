/**
 *
 * @param{number} n
 * @param{number} k
 * @return {number}
 */
function solution(n, k) {
  const parsed = n.toString(k);
  const sp = parsed.split('0')
    .filter((v) => v !== '1' && v !== '')
    .map(Number)
    .filter((v) => isPrime(v));
  return sp.length;
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(solution(437674, 3));
console.log(solution(110011, 10));
