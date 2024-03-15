/**
 *
 * @param{string} msg
 * @return {number[]}
 */
function solution(msg) {
  const answer = [];
  const dict = new Map();
  for (let i = 0; i < 26; i += 1) { // 기본 사전 세팅
    dict.set(String.fromCharCode(i + 65), i + 1);
  }
  let maxIndex = 26;
  let maxLength = 1;
  for (let i = 0; i < msg.length; i += 1) {
    const w = msg[i];
    if (i < msg.length) { // 마지막이 아닌 경우에만 수행 가능
      const c = msg[i + 1];
      let wc = `${w}${c}`;
      if (dict.get(wc)) { // 이미 존재하면
        answer.push(dict.get(wc));
        for (let j = 2; j < maxLength + 2; i += 1) {
          wc = `${wc}${msg[i + j]}`;
          if (!dict.get(wc)) {
            maxIndex += 1;
            dict.set(wc, maxIndex);
            maxLength = wc.length;
            break;
          }
        }
        i += 1;
      } else { // 없으면 그냐 구가
        answer.push(dict.get(w));
        maxIndex += 1;
        maxLength = 2;
        dict.set(wc, maxIndex);
      }
    }
  }

  console.log(dict);
  // console.log(maxLength);
  /*
  for (let i = 1; i < msg.length; i += 1) {
      console.log('i', i);
    for (let j = maxLength; j >= 0; j -= 1) {
      const sliced = msg.slice(i, j);
      if (dict.get(sliced)) {
        answer.push(dict.get(sliced));
        console.log('slieced',dict.get(sliced));
        i += (j-1);
        break;
      }
    }
  }

     */
  return answer;
}

/**
 * @param{string} msg
 * @param{string} w
 * @param{string} c
 * @param{Map} dict
 */
function addToDict(msg, w, c, dict) {

}

// console.log(solution('A'));
console.log(solution('KAKAO')); // [11, 1, 27, 15]
console.log(solution('TOBEORNOTTOBEORTOBEORNOT')); // [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
console.log(solution('ABABABABABABABAB')); // [1, 2, 27, 29, 28, 31, 30]
