// Solution 1
function solution(s) {
  const number = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < number.length; i++) {
    const arr = answer.split(number[i]);
    answer = arr.join(i);
  }
  return Number(answer);
}
