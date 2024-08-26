// Solution 1
function solution(n, t) {
  let answer = n * 2;
  for (let i = 1; i < t; i++) {
    answer *= 2;
  }
  return answer;
}

// Solution 2
// 비트연산자 - 2의 제곱
function solution(n, t) {
  return n << t;
}

// Solution 3
function solution(n, t) {
  return n * Math.pow(2, t);
}
