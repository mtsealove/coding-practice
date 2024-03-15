/**
 *
 * @param{string[]} operations
 * @return {*[]}
 */
function solution(operations) {
  const commands = operations.map((v) => {
    const sp = v.split(' ');
    return [sp[0], Number(sp[1])];
  });
  let queue = [];
  for (const [command, num] of commands) {
    if (command === 'I') {
      queue.push(num);
    } else {
      queue = queue.sort((a, b) => a - b);
      if (num === 1) {
        queue.pop();
      } else {
        queue.shift();
      }
    }
  }
  if (queue.length === 0) {
    return [0, 0];
  }
  queue = queue.sort((a, b) => a - b);
  return [queue[queue.length - 1], queue[0]];
}

console.log(solution(['I 16', 'I -5643', 'D -1', 'D 1', 'D 1', 'I 123', 'D -1']));
console.log(solution(['I -45', 'I 653', 'D 1', 'I -642', 'I 45', 'I 97', 'D 1', 'D -1', 'I 333']));
