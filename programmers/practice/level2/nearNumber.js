/**
 *
 * @param{number[]} sequence
 * @param{number} k
 * @return {*[]}
 */
function solution(sequence, k) {
  const set = new Set();
  let end = 0;
  let sum = 0;
  // 투포인터 알고리즘을 활용한 풀이
  for (let start = 0; start < sequence.length; start += 1) {
    while (sum < k && end < sequence.length) { // 합이 작으면 end 증가
      sum += sequence[end];
      end += 1;
    }
    if (sum === k) { // 합이 일치하니까 해당 값을 사용
      set.add([start, end - 1]);
    }
    sum -= sequence[start]; // 합에서 스타트값 뺴주기
  }
  const arr = [...set]
    .sort((a, b) => {
      if (a[1] - a[0] > b[1] - b[0]) {
        return 1;
      }
      if (a[1] - a[0] < b[1] - b[0]) {
        return -1;
      }
      return a[0] - b[0];
    });
  const result = arr[0];
  console.log(arr);
  return result;
}

console.log(solution([1, 2, 3, 4, 5], 7));
console.log(solution([1, 1, 1, 2, 3, 4, 5], 5));
console.log(solution([2, 2, 2, 2, 2], 6));
