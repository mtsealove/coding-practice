/**
 *
 * @param{string} word
 * @return {number}
 */

function solution(word) {
  let dict = [];
  const charArr = ['A', 'E', 'I', 'O', 'U'];
  for (let i = 1; i <= 5; i += 1) {
    dfs('', 0, i, charArr, dict);
  }
  dict = dict.sort();
  return dict.indexOf(word) + 1;
}

// DFS는 재귀함수를 통해서 구현하는 것
// 모든 값을 계산하여 푸는 방식
function dfs(str, currentLength, maxLength, charArr, dict) {
  if (currentLength === maxLength) { // 길이가 맞으면 삽입(1 ~ 5)
    dict.push(str);
    return;
  }
  // 길이가 다르면 해당 문자열에 모든 문자열을 붙여서 삽입
  for (let i = 0; i < charArr.length; i += 1) {
    dfs(str + charArr[i], currentLength + 1, maxLength, charArr, dict);
  }
}

console.log(solution('AAAAE'));
console.log(solution('AAAE'));
console.log(solution('I'));
console.log(solution('EIO'));
