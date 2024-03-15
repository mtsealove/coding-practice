/*
알파벳 소문자로만 이루어진 단어가 주어진다. 이때, 이 단어가 팰린드롬인지 아닌지 확인하는 프로그램을 작성하시오.

팰린드롬이란 앞으로 읽을 때와 거꾸로 읽을 때 똑같은 단어를 말한다.

level, noon은 팰린드롬이고, baekjoon, online, judge는 팰린드롬이 아니다.
 */

const fs = require('fs');

function bootstrap() {
  const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
  const input = fs.readFileSync(filePath).toString().trim().split('\n');

  const [word] = input;
  if (word.length === 1) {
    console.log(1);
    return;
  }
  const front = word.slice(0, Math.floor(word.length / 2));
  const back = word.slice(Math.floor(word.length / 2) + (word.length % 2 === 0 ? 0 : 1), word.length)
    .split('')
    .reverse()
    .reduce((a, b) => `${a}${b}`);

  console.log(front === back ? 1 : 0);
}

bootstrap();
