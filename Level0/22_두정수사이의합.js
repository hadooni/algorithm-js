// Solution 1
function solution(a, b) {
  var answer = 0;
  // a가 b보다 클 경우(a, b가 같을 경우는 둘 중 아무 수나 리턴)
  if (a >= b) {
    for (let i = b; i <= a; i++) {
      // b에서 a까지 더하기
      answer += i;
    }
    //b가 a보다 클 경우
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      // a에서 b까지 더하기
      answer += i;
    }
  }
  return answer;
}

// Solution 2
function solution(a, b) {
  let answer = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }
  return answer;
}
