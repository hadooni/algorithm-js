// Solution 1
function solution(cipher, code) {
  var answer = "";
  for (let i = 1; i <= cipher.length / code; i++) {
    answer += cipher.substring(code * i - 1, code * i);
  }
  return answer;
}
