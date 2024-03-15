/*
과제를 받은 루는 다음과 같은 순서대로 과제를 하려고 계획을 세웠습니다.
과제는 시작하기로 한 시각이 되면 시작합니다.
새로운 과제를 시작할 시각이 되었을 때,
기존에 진행 중이던 과제가 있다면 진행 중이던 과제를 멈추고 새로운 과제를 시작합니다.
진행중이던 과제를 끝냈을 때, 잠시 멈춘 과제가 있다면, 멈춰둔 과제를 이어서 진행합니다.
만약, 과제를 끝낸 시각에 새로 시작해야 되는 과제와 잠시 멈춰둔 과제가 모두 있다면
, 새로 시작해야 하는 과제부터 진행합니다.
멈춰둔 과제가 여러 개일 경우, 가장 최근에 멈춘 과제부터 시작합니다.
과제 계획을 담은 이차원 문자열 배열 plans가 매개변수로 주어질 때,
 과제를 끝낸 순서대로 이름을 배열에 담아 return 하는 solution 함수를 완성해주세요.
 */

/**
 *
 * @param{string[][]} plans
 * @return {string[]}
 */
function solution(plans) {
  const answer = [];
  const stack = []; // 멈춰둔 과제를 저장할 스택(후입선출)
  plans = plans.map((a) => [a[0], getMin(a[1]), Number(a[2])]) // 계산하기 편한 형태로 변환
    .sort((a, b) => a[1] - b[1]); // 시간순 정렬(아닐 수 있기에)
  console.log(plans);
  const times = plans.map((v)=>v[1]);
  const startTime = plans[0];
  console.log(times);
  for(let i=0; i<plans.length; i+=1) {
      const current = plans[i];
      if(i===plans.length-1) {
          answer.push(current[0]);
      } else {
          const next = plans[i+1];
          const remainTime =next[1]-(current[0]+ current[1])
          stack.push(next);
          while (stack.length!==0 && remainTime>0) {
              const completed = stack.pop();
              const played = Math.min(remainTime, completed[1])
          }
      }
  }
  return answer;
}

function getMin(time) {
  const sp = time.split(':');
  const min = Number(sp[1]);
  const hour = Number(sp[0]) * 60;
  return min + hour;
}

// console.log(solution([['korean', '11:40', '30'], ['english', '12:10', '20'], ['math', '12:30', '40']]));
console.log(solution([['science', '12:40', '50'], ['music', '12:20', '40'], ['history', '14:00', '30'], ['computer', '12:30', '100']]));
// console.log(solution([['aaa', '12:00', '20'], ['bbb', '12:10', '30'], ['ccc', '12:40', '10']]));
