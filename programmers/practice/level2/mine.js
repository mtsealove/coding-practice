/**
 *
 * @param{number[]} picks
 * @param{string[]} minerals
 * @return {number}
 */
function solution(picks, minerals) {
  const map = new Map();
  const maxLength = picks.reduce((a, b) => a + b) * 5;
  minerals = minerals.slice(0, maxLength);
  map.set('diamond diamond', 1);
  map.set('diamond iron', 1);
  map.set('diamond stone', 1);
  map.set('iron diamond', 5);
  map.set('iron iron', 1);
  map.set('iron stone', 1);
  map.set('stone diamond', 25);
  map.set('stone iron', 5);
  map.set('stone stone', 1);
  const sliced = [];
  for (let i = 0; i < minerals.length; i += 5) {
    sliced.push(minerals.slice(i, i + 5));
  }
  const mapped = sliced.map((section) => {
    let stone = 0;
    let dia = 0;
    let iron = 0;
    for (const n of section) {
      stone += map.get(`stone ${n}`);
      dia += map.get(`diamond ${n}`);
      iron += map.get(`iron ${n}`);
    }
    return {
      stone, dia, iron,
    };
  }).sort((a, b) => b.stone - a.stone);
  let pivot = 0;
  let sum = 0;
  for (let i = 0; i < mapped.length; i += 1) {
    const {
      dia, iron, stone,
    } = mapped[i];
    while (picks[pivot] === 0) {
      pivot += 1;
    }
    if (pivot === 3) {
      break;
    }
    picks[pivot] -= 1;
    switch (pivot) {
      case 0: sum += dia;
        break;
      case 1: sum += iron;
        break;
      default:
        sum += stone;
    }
  }
  return sum;
}

console.log(solution([1, 3, 2], ['diamond', 'iron', 'iron', 'iron', 'stone',
  'diamond', 'diamond', 'iron', 'iron', 'stone',
  'diamond', 'diamond', 'diamond', 'iron', 'stone']));
console.log(solution([1, 3, 2], ['diamond', 'diamond', 'diamond', 'iron', 'iron', 'diamond', 'iron', 'stone']));
console.log(solution([0, 1, 1], ['diamond', 'diamond', 'diamond', 'diamond', 'diamond', 'iron', 'iron', 'iron', 'iron', 'iron', 'diamond']));
/*
//
console.log(solution([2, 1, 0], ['diamond', 'diamond', 'diamond', 'diamond', 'diamond',
  'iron', 'iron', 'iron', 'iron', 'iron',
  'diamond', 'diamond', 'diamond', 'diamond', 'diamond']));
// console.log(solution([1, 1, 1], ["stone", "iron", "iron", "stone", "iron", "diamond"] ))
console.log(solution([1, 1, 0], ['stone', 'stone', 'iron', 'stone', 'diamond', 'diamond', 'diamond', 'diamond', 'diamond', 'diamond']));
/*
for (let i = 0; i < 10000000; i += 1) {
  const items = [];
  const minerals = [];
  for (let j = 0; j < 3; j += 1) {
    const a = Math.round(Math.random() * 5);
    items.push(a);
  }
  const count = Math.round(Math.random() * 45) + 5;
  for (let j = 0; j < count; j += 1) {
    let name = '';
    const b = Math.round(Math.random() * 10) % 3;
    switch (b) {
      case 0: name = 'diamond';
        break;
      case 1: name = 'iron';
        break;
      default:
        name = 'stone';
    }
    minerals.push(name);
  }
  console.log(solution(items, minerals));
}

 */
