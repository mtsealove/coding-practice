/**
 *
 * @param{number} n
 * @param{number[][]} wires
 * @return {number}
 */
function solution(n, wires) {
  const answer = -1;
  const map = new Map();
  for (const [a, b] of wires) {
    let aOg = map.get(a);
    if (!aOg) {
      aOg = new Set();
    }
    aOg.add(b);
    let bOg = map.get(b);
    if (!bOg) {
      bOg = new Set();
    }
    bOg.add(a);
    map.set(a, aOg);
    map.set(b, bOg);
  }
  const arr = [...map]
    .sort((a, b) => b[1].size - a[1].size);
  // console.log(arr);
  const firstNode = arr[0];
  const enables = [];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i][1].has(firstNode[0])) { // 기준 노드와 연결되어 있으면
      enables.push(arr[i]);
    }
  }
  console.log(firstNode);
  console.log(enables);
  return answer;
}
console.log(solution(9, [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]]));
console.log(solution(4, [[1, 2], [2, 3], [3, 4]]));
console.log(solution(7, [[1, 2], [2, 7], [3, 7], [3, 4], [4, 5], [6, 7]]));
