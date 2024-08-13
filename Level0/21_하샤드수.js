// Solution 1
function solution(x) {
  let sumNum = (x + "")
    .split("")
    .map((n) => Number(n))
    .reduce((a, b) => a + b);
  return x % sumNum === 0 ? true : false;
}

// 1. 자릿수의 합 구하기
// 2. 자릿수의 합으로 x 나누어서 나머지가 0이면 true, 아니면 false 반환
