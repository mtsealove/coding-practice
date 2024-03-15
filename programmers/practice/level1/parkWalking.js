/*
지나다니는 길을 'O', 장애물을 'X'로 나타낸 직사각형 격자 모양의 공원에서 로봇 강아지가 산책을 하려합니다.
산책은 로봇 강아지에 미리 입력된 명령에 따라 진행하며, 명령은 다음과 같은 형식으로 주어집니다.

["방향 거리", "방향 거리" … ]
예를 들어 "E 5"는 로봇 강아지가 현재 위치에서 동쪽으로 5칸 이동했다는 의미입니다.
로봇 강아지는 명령을 수행하기 전에 다음 두 가지를 먼저 확인합니다.

주어진 방향으로 이동할 때 공원을 벗어나는지 확인합니다.
주어진 방향으로 이동 중 장애물을 만나는지 확인합니다.
위 두 가지중 어느 하나라도 해당된다면, 로봇 강아지는 해당 명령을 무시하고 다음 명령을 수행합니다.
공원의 가로 길이가 W, 세로 길이가 H라고 할 때, 공원의 좌측 상단의 좌표는 (0, 0), 우측 하단의 좌표는 (H - 1, W - 1) 입니다.

공원을 나타내는 문자열 배열 park,
로봇 강아지가 수행할 명령이 담긴 문자열 배열 routes가 매개변수로 주어질 때,
 로봇 강아지가 모든 명령을 수행 후 놓인 위치를
  [세로 방향 좌표, 가로 방향 좌표] 순으로 배열에 담아 return 하도록 solution 함수를 완성해주세요.
 */
/**
 *
 * @param{string[]} park
 * @param{string[]} routes
 * @returns {*[]}
 */
function solution(park, routes) {
  const map = park.map((line) => line.split(''));
  const maxX = map[0].length;
  const maxY = map.length;
  const point = { x: 0, y: 0 };
  // 시작 지점 계산
  for (let i = 0; i < maxY; i += 1) {
    for (let j = 0; j < maxX; j += 1) {
      if (map[i][j] === 'S') {
        point.x = j;
        point.y = i;
      }
    }
  }

  routes.forEach((route) => {
    const sp = route.split(' ');
    const direction = sp[0];
    const move = Number(sp[1]);
    // 이동할 수 있는지 확인
    switch (direction) {
      case 'E': // 가로줄에서 X가 포함되는지 확인, 하나 오늘쪽에서부터 마지막까지
        if (point.x + move < maxX && map[point.y].slice(point.x + 1, point.x + move + 1).indexOf('X') === -1) {
          point.x += move;
        }
        break;
      case 'W':
        if (point.x - move >= 0 && map[point.y].slice(point.x - move, point.x).indexOf('X') === -1) {
          point.x -= move;
        }
        break;
      case 'S': // 세로로 이동하며 X가 있는지 확인
        if (point.y + move < maxY) {
          let enable = true;
          for (let i = 1; i <= move; i += 1) {
            if (map[i + point.y][point.x] === 'X') {
              enable = false;
              break;
            }
          }
          if (enable) {
            point.y += move;
          }
        }
        break;
      default:
        if (point.y - move >= 0) {
          let enable = true;
          for (let i = 1; i <= move; i += 1) {
            if (map[point.y - i][point.x] === 'X') {
              enable = false;
              break;
            }
          }
          if (enable) {
            point.y -= move;
          }
        }
    }
  });
  return [point.y, point.x];
}

console.log(solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1']));
console.log(solution(['SOO', 'OXX', 'OOO'], ['E 2', 'S 2', 'W 1']));
console.log(solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']));
