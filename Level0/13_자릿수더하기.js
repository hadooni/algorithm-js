// Solution 1
function solution(n) {
  // 1. N 을 배열로 바꾸기
  const arr = n + "";
  const arrList = arr.split("");
  // 2. 배열 안 문자 숫자로 바꾸기
  let numList = arrList.map((n) => Number(n));
  // 3. 숫자 합산하기
  let sum = numList.reduce((a, b) => a + b);
  return sum;
}
