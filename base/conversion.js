/**
 * number 를 k 진수로 변환
 * @param{number} number
 * @param{number} k
 * @return {string}
 */
function conversion(number, k) {
  let current = number;
  let result = '';
  while (current > 0) {
    if (current % k < 10) {
      result += (current % k);
    } else {
      result += String.fromCharCode(((current % 10) + 65));
    }
    current = Math.floor(current/k);
  }
  return result;
}
