/*
퀼정렬
worst O(nLog2n), best O(n**2)
피봇값을 사용
 */
const a = [66, 77, 54, 32, 10, 5, 11, 15];

/**
 *
 * @param{number[]} arr
 */
function quickSort(arr) {
  const { length } = arr;
  if (length <= 1) {
    return arr;
  }
  const pivot = [arr.shift()];
  const group1 = [];
  const group2 = [];
  for (const i of arr) {
    if (i < pivot[0]) {
      group1.push(i);
    } else {
      group2.push(i);
    }
  }
  console.log('pivot', pivot);
  console.log('1:', group1);
  console.log('2:', group2);
  return quickSort(group1).concat(pivot, quickSort(group2));
}

console.log(quickSort(a));
