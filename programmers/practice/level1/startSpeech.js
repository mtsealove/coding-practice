/*
머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다.
조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고
 연속해서 같은 발음을 하는 것을 어려워합니다.
 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를
 return하도록 solution 함수를 완성해주세요.
 */

function getAllIdx(arr, value) {
  const indexes = [];
  let i = -1;
  while ((i = arr.indexOf(value, i + 1)) !== -1) {
    indexes.push(i);
  }
  return indexes;
}

/**
 *
 * @param{string[]} babbling
 * @returns {number}
 */

function solution(babbling) {
  const enable = ['aya', 'ye', 'woo', 'ma'];
  return babbling.map((word) => {
    enable.forEach((e, i) => {
      word = word.replaceAll(e, `${i}`);
    });
    enable.forEach((_, i) => {
      word = word.replaceAll(`${i}${i}`, 'X');
    });
    enable.forEach((_, i) => {
      word = word.replaceAll(`${i}`, '');
    });
    return word.length === 0 ? 1 : 0;
  })
    .reduce((a, b) => a + b, 0);
}
/*
function solution(babbling) {
  let answer = 0;
  const enable = ['aya', 'ye', 'woo', 'ma']; // 가능한 발음 조합
  for (let speak of babbling) {
    for (let i = 0; i < enable.length; i += 1) { // 연속된 단어 판단
      speak = speak.replaceAll(enable[i], `${i}`);
    }
    for (let i = 0; i < enable.length; i += 1) {
      speak = speak.replaceAll(`${i}${i}`, 'X');
    }
    for (let i = 0; i < enable.length; i += 1) {
      speak = speak.replaceAll(`${i}`, '');
    }
    if (speak.length === 0) { // 불가능이 남아 있지 않은 경우
      answer += 1;
    }
  }
  return answer;
}

 */

console.log(solution(['aya', 'yee', 'u', 'maa'])); // 1
console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa'])); // 2
