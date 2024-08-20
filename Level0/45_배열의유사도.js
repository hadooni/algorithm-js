// Solution 1
function solution(s1, s2) {
  var answer = [];
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) {
      answer.push(s1[i]);
    }
  }
  return answer.length;
}

// Solution 2
function solution(s1, s2) {
  return s1.filter((one) => s2.includes(one)).length;
}
