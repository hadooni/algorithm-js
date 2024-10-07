function solution(my_str, n) {
  let answer = [];
  let newStr = my_str.split("");

  while (newStr.length > 0) {
    answer.push(newStr.splice(0, n).join(""));
  }
  return answer;
}
