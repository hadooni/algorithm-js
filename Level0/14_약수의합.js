// Solution 1
function solution(n) {
  var answer = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

// n으로 나누었을 때 나머지가 0이 되는 경우들의 합 구하기
