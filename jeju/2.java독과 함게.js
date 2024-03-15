const durabilities = [1, 2, 1, 4];
const dogs = [{
  이름: '루비독',
  나이: '95년생',
  점프력: '3',
  몸무게: '4',
}, {
  이름: '피치독',
  나이: '95년생',
  점프력: '3',
  몸무게: '3',
}, {
  이름: '씨-독',
  나이: '72년생',
  점프력: '2',
  몸무게: '1',
}, {
  이름: '코볼독',
  나이: '59년생',
  점프력: '1',
  몸무게: '1',
},
];

/**
 *
 * @param{[]} dogs
 * @param{number[]} durability
 * @return {*[]}
 */
function solution(dogs, durability) {
  const answer = [];
  for (const dog of dogs) {
    console.log(dog);
    const jump = Number(dog['점프력']);
    const weight = Number(dog['몸무게']);
    const name = dog['이름'];
    let move = 0;
    let failed = false;
    while (move < durability.length - 1) {
      move += jump;
      durability[move - 1] -= weight;
      if (durability[move - 1] < 0) {
        failed = true;
        break;
      }
    }
    if (!failed) {
      answer.push(name);
    }
  }
  return answer;
}

console.log(solution(dogs, durabilities));
