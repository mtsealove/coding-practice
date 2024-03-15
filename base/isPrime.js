/**
 * 에라토스테네스의 체 알고리즘
 * @param{number} n
 * @return {boolean}
 */
function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
