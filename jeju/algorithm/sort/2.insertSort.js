/*
삽입정렬
 */

const a = [5, 10, 66, 77, 54, 32, 11, 15];
const { length } = a;
const sorted = [];

function getIndex(arr, value) {
  for (const i in arr) {
    if (value < arr[i]) {
      return i;
    }
  }
  return arr.length;
}

for (let i = 0; i < length; i += 1) {
  const value = a.shift();
  const index = getIndex(sorted, value);
  sorted.splice(index, 0, value);
  console.log(sorted);
}

console.log(sorted);
