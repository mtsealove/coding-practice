/*
병합정렬
O(nLogn)
분할과 정복
 */

const a = [5, 10, 66, 77, 54, 32, 11, 15];

/* 분할
[5, 10, 66, 77], [54, 32, 11, 15]
[5, 10], [66, 77], [54, 32], [11, 15]
[5], [10], [66], [77], [54], [32], [11], [15]

정복
[5, 10], [66, 77], [32, 54], [11, 15]
[], [66, 77], [32, 54], [11, 15]
[5, 10, 66, 77], [11, 15, 32, 54]
[5, 10, 11, 15, 32, 54, 66, 77]
 */

/**
 *
 * @param{number[]} arr
 // * @return{number[]}
 */
function mergeSort(arr) {
  const { length } = arr;
  const result = [];
  if (length <= 1) {
    return arr;
  }
  const middle = Math.floor(length / 2);
  const group1 = mergeSort(arr.slice(0, middle));
  const group2 = mergeSort(arr.slice(middle));
  while (group1.length !== 0 && group2.length !== 0) {
    if (group1[0] < group2[0]) {
      result.push(group1.shift());
    } else {
      result.push(group2.shift());
    }
  }
  while (group1.length !== 0) {
    result.push(group1.shift());
  }
  while (group2.length !== 0) {
    result.push(group2.shift());
  }
  return result;
}

console.log(mergeSort(a));
