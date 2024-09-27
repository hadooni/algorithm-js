// Solution 1
function solution(my_string) {
  const newStr = my_string.split(" ");
  let answer = +newStr[0];
  newStr.forEach((e, i) => {
    if (e === "+") {
      answer += +newStr[i + 1];
    }
    if (e === "-") {
      answer -= +newStr[i + 1];
    }
  });
  return answer;
}
