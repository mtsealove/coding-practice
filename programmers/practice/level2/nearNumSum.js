/*
비내림차순으로 정렬된 수열이 주어질 때, 다음 조건을 만족하는 부분 수열을 찾으려고 합니다.

기존 수열에서 임의의 두 인덱스의 원소와 그 사이의 원소를 모두 포함하는 부분 수열이어야 합니다.
부분 수열의 합은 k입니다.
합이 k인 부분 수열이 여러 개인 경우 길이가 짧은 수열을 찾습니다.
길이가 짧은 수열이 여러 개인 경우 앞쪽(시작 인덱스가 작은)에 나오는 수열을 찾습니다.
수열을 나타내는 정수 배열 sequence와 부분 수열의 합을 나타내는 정수 k가 매개변수로 주어질 때
, 위 조건을 만족하는 부분 수열의 시작 인덱스와 마지막 인덱스를 배열에 담아 return 하는
solution 함수를 완성해주세요. 이때 수열의 인덱스는 0부터 시작합니다.
 */
/**
 *
 * @param{number[]} sequence
 * @param{number} k
 * @returns {number[]}
 */

function solution(sequence, k) {
  const queue = [];
  for (let i = sequence.length - 1; i >= 0; i -= 1) {
    let sum = queue.reduce((a, b) => a + b, 0);
    if (sum > k) queue.shift();

    queue.push(sequence[i]);
    sum = queue.reduce((a, b) => a + b, 0);
    if (sum === k) {
      if (i > 0 && sequence[i - 1] === queue[queue.length - 1]) {
        while (i > 0 && sequence[i - 1] === queue[queue.length - 1]) {
          i -= 1;
        }
      }
      return [i, i + queue.length - 1];
    }
  }
  return [-1, -1];
}

/*
function solution(sequence, k) {
  const singleIdx = sequence.indexOf(k);
  if (singleIdx !== -1) { // 단일 수열 조회
    return [singleIdx, singleIdx];
  }
  // 전부 순회를 하며, 수행하게 되면 O(n^n)이됨
  // 함수형으로 짤 수 있을지도?
  const sums = sequence.map((s, index) => {
    let sum = s;
    let i = index + 1;
    while (sum < k && i < sequence.length - 1) {
      sum += sequence[i];
      if (sum === k) {
        break;
      }
      i += 1;
    }
    return { sum, start: index, end: i };
  }).filter((a) => a.sum === k)
    .sort((a, b) => {
      if (a.start < b.start) {
        return 1;
      }
      if (b.start < b.start) {
        return -1;
      }
      return 0;
    });
  return [sums[0].start, sums[0].end];
}

 */

/*
 public int[] solution(int[] sequence, int k)
        {
            Queue<int> queue = new Queue<int>();

            // 제일 큰 수부터 확인
            for (int i = sequence.Length - 1; i >= 0; i--)
            {
                if (queue.Sum() > k)
                    queue.Dequeue();

                queue.Enqueue(sequence[i]);

                if (queue.Sum() == k)
                {
                    // 만약, queue의 제일 큰 수와 다음 확인 예정인 수가 같을 때
                    if (i > 0 && sequence[i - 1] == queue.Peek())
                        while (i > 0 && sequence[i - 1] == queue.Peek())
                            i--;

                    return new int[2] { i, i + queue.Count - 1 };
                }
            }

            return new int[2] { -1, -1 };
        }
 */

console.log(solution([1, 2, 3, 4, 5], 7)); // [2, 3]
console.log(solution([1, 1, 1, 2, 3, 4, 5], 5)); // [6, 6]
console.log(solution([2, 2, 2, 2, 2], 6)); // [0, 2]
