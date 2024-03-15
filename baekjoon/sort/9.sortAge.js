const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const members = input.filter((_, i) => i > 0)
  .map((line) => {
    const sp = line.split(' ');
    return [Number(sp[0]), sp[1]];
  }).sort(([age1], [age2]) => {
    if (age1 > age2) {
      return 1;
    }
    if (age1 < age2) {
      return -1;
    }
    return 0;
  }).map(([age, name]) => `${age} ${name}`)
  .reduce((a, b) => `${a}\n${b}`);

console.log(members);
