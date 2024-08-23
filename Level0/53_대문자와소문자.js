// Solution 1
function solution(my_string) {
  var answer = "";
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] !== my_string[i].toLowerCase()) {
      answer += my_string[i].toLowerCase();
    } else {
      answer += my_string[i].toUpperCase();
    }
  }
  return answer;
}

// Solution 2
function solution(my_string) {
  var answer = "";
  for (let s of my_string)
    answer += s === s.toLowerCase() ? s.toUpperCase() : s.toLowerCase();
  return answer;
}
