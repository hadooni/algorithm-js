// Solution1
function solution(i, j, k) {
  var answer = "";
  for (i; i <= j; i++) {
    answer += i;
  }
  return answer.split("").filter((n) => n == k).length;
}
