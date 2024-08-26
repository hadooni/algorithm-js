// Solution 1
function solution(n) {
  let answer = 0;
  let str = n + "";
  for (let i = 0; i < str.length; i++) {
    answer += 1 * str[i];
  }
  return answer;
}

// Solution 2
function solution(n) {
  return (n + "").split("").reduce((a, b) => a + +b, 0);
}
