// Solution 1
function solution(dot) {
  var answer = 0;
  if (dot[0] > 0 && dot[1] > 0) answer = 1;
  if (dot[0] < 0 && dot[1] > 0) answer = 2;
  if (dot[0] < 0 && dot[1] < 0) answer = 3;
  if (dot[0] > 0 && dot[1] < 0) answer = 4;
  return answer;
}

// Solution 2
// 삼항연산자
function solution(dot) {
  return dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : dot[1] > 0 ? 2 : 3;
}
