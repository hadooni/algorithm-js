// Solution 1
function solution(s) {
  let answer = [];
  let newArr = s.split("");

  newArr.forEach((item) => {
    if (s.indexOf(item) === s.lastIndexOf(item)) {
      answer.push(item);
    }
  });
  return answer.sort().join("");
}
