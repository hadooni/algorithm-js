function solution(numbers) {
  let numArr = [
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
  numArr.forEach((num, idx) => {
    numbers = numbers.replaceAll(num, idx);
  });
  return +numbers;
}
