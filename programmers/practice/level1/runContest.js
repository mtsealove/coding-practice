/*
얀에서는 매년 달리기 경주가 열립니다.
 해설진들은 선수들이 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부릅니다
  예를 들어 1등부터 3등까지 "mumu", "soe", "poe" 선수들이 순서대로 달리고 있을 때,
  해설진이 "soe"선수를 불렀다면 2등인 "soe" 선수가 1등인 "mumu" 선수를 추월했다는 것입니다.
  즉 "soe" 선수가 1등, "mumu" 선수가 2등으로 바뀝니다.

선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와
 해설진이 부른 이름을 담은 문자열 배열 callings가 매개변수로 주어질 때,
  경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return 하는 solution 함수를 완성해주세요.
 */

/**
 *
 * @param {string[]} players
 * @param {string[]} callings
 */

function solution(players, callings) {
  // map 구조로 변환 obj 구조보다 코테에서 효율적으로 사용하기 좋을 듯
  const map = new Map();
  players.forEach((p, idx) => {
    map.set(p, idx);
  });
  callings.forEach((call) => {
    // 현재와 이전 인덱스 조회
    const current = map.get(call);
    const frontIdx = current - 1;
    const front = players[frontIdx];
    // swap 방식 이렇게 하는게 효율적일 듯
    [players[current], players[frontIdx]] = [players[frontIdx], players[current]];
    // 현재 인덱스에서 하나 빼고 그 값 + 1의 수를 설정
    map.set(call, map.get(call) - 1);
    map.set(front, map.get(front) + 1);
  });
  return players;
}

console.log(solution(['mumu', 'soe', 'poe', 'kai', 'mine'], ['kai', 'kai', 'mine', 'mine']));
