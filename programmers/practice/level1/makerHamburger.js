/*
햄버거 가게에서 일을 하는 상수는 햄버거를 포장하는 일을 합니다.
 함께 일을 하는 다른 직원들이 햄버거에 들어갈 재료를 조리해 주면
 조리된 순서대로 상수의 앞에 아래서부터 위로 쌓이게 되고,
 상수는 순서에 맞게 쌓여서 완성된 햄버거를 따로 옮겨 포장을 하게 됩니다.
  상수가 일하는 가게는 정해진 순서(아래서부터, 빵 – 야채 – 고기 - 빵)로 쌓인 햄버거만 포장을 합니다.
   상수는 손이 굉장히 빠르기 때문에 상수가 포장하는 동안 속 재료가 추가적으로 들어오는 일은 없으며,
    재료의 높이는 무시하여 재료가 높이 쌓여서 일이 힘들어지는 경우는 없습니다.

예를 들어, 상수의 앞에 쌓이는 재료의 순서가 [야채, 빵, 빵, 야채, 고기, 빵, 야채, 고기, 빵]일 때,
 상수는 여섯 번째 재료가 쌓였을 때, 세 번째 재료부터 여섯 번째 재료를 이용하여 햄버거를 포장하고,
 아홉 번째 재료가 쌓였을 때, 두 번째 재료와 일곱 번째 재료부터 아홉 번째 재료를 이용하여 햄버거를 포장합니다.
 즉, 2개의 햄버거를 포장하게 됩니다.

상수에게 전해지는 재료의 정보를 나타내는 정수 배열 ingredient가 주어졌을 때,
 */

/**
 *
 * @param{number[]} ingredient
 * @returns {number}
 */

function solution(ingredient) {
  let count = 0;
  const queue = [];
  const pattern = '1231';
  for (let i = 0; i < ingredient.length; i += 1) {
    queue.push(ingredient[i]);
    const qLength = queue.length;
    if (qLength >= 4) {
      const current = `${queue[qLength - 4]}${queue[qLength - 3]}${queue[qLength - 2]}${queue[qLength - 1]}`;
      if (current === pattern) {
        count += 1;
        queue.pop();
        queue.pop();
        queue.pop();
        queue.pop();
      }
    }
  }
  return count;
}

/*
function solution(ingredient) {
  const pattern = '1231';
  let count = 0;
  let queue = ingredient.join('');
  while (queue.indexOf(pattern) !== -1) {
    queue = queue.replace(pattern, '');
    count += 1;
  }
  return count;
}

 */

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0
