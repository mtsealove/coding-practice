/**
 *
 * @param{string} m
 * @param {string[]} musicinfos
 * @return {string}
 */
function solution(m, musicinfos) {
  const listen = replace(m);
  const matched = [];
  for (const music of musicinfos) {
    const sp = music.split(',');
    const start = sp[0];
    const end = sp[1];
    const title = sp[2];
    const plays = makeScale(replace(sp[3]));
    const playTime = getMin(start, end);
    const realPlay = [];
    // 실제 플레이된 배열 생성
    for (let i = 0; i < playTime; i += 1) {
      realPlay.push(plays[i % plays.length]);
    }
    if (realPlay.join('').indexOf(listen) !== -1) { // 후에 정렬하기 위해 재생된 시간이 포함된 배열로 추가
      matched.push([title, playTime]);
    }
  }
  if (matched.length === 0) {
    return '(None)';
  }
  return matched.sort((a, b) => b[1] - a[1])[0][0];
}

function replace(str) {
  return str.replace(/A#/gi, '0')
    .replace(/B#/gi, '1')
    .replace(/C#/gi, '3')
    .replace(/D#/gi, '4')
    .replace(/E#/gi, '5')
    .replace(/F#/gi, '6')
    .replace(/G#/gi, '7');
}

function makeScale(arr) {
  const plays = [];
  for (let i = 0; i < arr.length; i += 1) {
    const og = arr[i];
    if (og !== '#' && i !== arr.length - 1 && arr[i + 1] === '#') {
      plays.push(`${og}#`);
    } else if (og !== '#') {
      plays.push(og);
    }
  }
  return plays;
}

// 재생된 시간 계산
function getMin(start, end) {
  const sp0 = start.split(':');
  const sp1 = end.split(':');
  const startMin = Number(sp0[0]) * 60 + Number(sp0[1]);
  const endMin = Number(sp1[0]) * 60 + Number(sp1[1]);
  return endMin - startMin;
}

console.log(solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF']));
console.log(solution('CC#BCC#BCC#BCC#B', ['03:00,03:30,FOO,CC#B', '04:00,04:08,BAR,CC#BCC#BCC#B']));
console.log(solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF']));
