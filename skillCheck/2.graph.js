/*
이때 당신은 그래프의 간선 정보가 주어지면 생성한 정점의 번호와 정점을 생성하기 전 도넛 모양 그래프의 수
 막대 모양 그래프의 수, 8자 모양 그래프의 수를 구해야 합니다.

그래프의 간선 정보를 담은 2차원 정수 배열 edges가 매개변수로 주어집니다.
 이때, 생성한 정점의 번호, 도넛 모양 그래프의 수, 막대 모양 그래프의 수, 8자 모양 그래프의 수를
 순서대로 1차원 정수 배열에 담아 return 하도록 solution 함수를 완성해 주세요.
 */

function solution(edges) {
  const answer = [];
  return answer;
}

console.log(solution([[2, 3], [4, 3], [1, 1], [2, 1]])); // [2, 1, 1, 0]
console.log(solution([[4, 11], [1, 12], [8, 3], [12, 7], [4, 2], [7, 11], [4, 8], [9, 6], [10, 11], [6, 10], [3, 5], [11, 1], [5, 3], [11, 9], [3, 8]])); // [4, 0, 1, 2]