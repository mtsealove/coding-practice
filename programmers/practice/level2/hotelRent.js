/*
호텔을 운영 중인 코니는 최소한의 객실만을 사용하여 예약 손님들을 받으려고 합니다.
한 번 사용한 객실은 퇴실 시간을 기준으로 10분간 청소를 하고 다음 손님들이 사용할 수 있습니다.
예약 시각이 문자열 형태로 담긴 2차원 배열 book_time이 매개변수로 주어질 때
, 코니에게 필요한 최소 객실의 수를 return 하는 solution 함수를 완성해주세요.
 */
const dayjs = require('dayjs');
/**
 *
 * @param{string[]} times
 */
function addTenMin(times) {
  const end = times[1];
  const sp = end.split(':');
  let min = Number(sp[1]);
  let hour = Number(sp[0]);
  min += 10;
  if (min >= 60) {
    min = 0;
    hour += 1;
  }
  return `${`${hour}`.padStart(0)}:${min}`;
}

/**
 *
 * @param{string} dates
 */
function parseDate(dates) {

}

/**
 *
 * @param{string} time
 * @returns {number}
 */
const getMin = (time) => {
  const sp = time.split(':');
  return Number(sp[0]) * 60 + Number(sp[1]);
};

/**
 *
 * @returns {number}
 * @param{string[][]} book_time
 */
function solution(book_time) {
  let answer = 1;
  // eslint-disable-next-line camelcase
  const sorted = book_time.sort((a, b) => getMin(a[0]) - getMin(b[0]));
  const stack = [sorted[0]];
  for (let i = 1; i < sorted.length; i += 1) {
    const [start, end] = sorted[i];
    const isdup = stack.every(([st, ed]) => getMin(ed) + 10 > getMin(start));
    if (isdup) {
      answer += 1;
      stack.push(sorted[i]);
    } else {
      const index = stack.findIndex(([st, ed]) => getMin(ed) + 10 <= getMin(start));
      stack[index] = sorted[i];
    }
  }
  return answer;
}
/*
function solution(book_time) {
  const answer = 0;
  const schedules = book_time.map((b) => {
    const start = new Date(`2024-02-20 ${b[0]}:00`);
    const end = new Date(`2024-02-20 ${b[1]}:00`);
    end.setTime(end.getTime() + 1000 * 60 * 10); // 10분 추가
    return [start, end];
  }).sort((a, b) => { // 오름차순 정렬
    if (a[0] < b[0]) {
      return -1;
    }
    if (b[0] < a[0]) {
      return 1;
    }
    return 0;
  });
  console.log(schedules.map((d) => [dayjs(d[0]).format('HH:mm'), dayjs(d[1]).format('HH:mm')]));
  const maxNum = 0;
  const map = new Map();
  const enables = 0;
  schedules.forEach((schedule) => {
    const start = schedule[0];
    const end = schedule[1];
    for (let i = 0; i < maxNum; i += 1) {
      const og = map.get(i);
      if(og && og.getTime()<start.getTime()) { // 이전 방이 퇴실일 경우
        map.set(i, end);
      } else {

      }
    }
  });
  return answer;
}

 */

console.log(solution([['15:00', '17:00'], ['16:40', '18:20'], ['14:20', '15:20'], ['14:10', '19:20'], ['18:20', '21:20']])); // 3
console.log(solution([['09:10', '10:10'], ['10:20', '12:20']])); // 1
console.log(solution([['10:20', '12:30'], ['10:20', '12:30'], ['10:20', '12:30']])); // 3
