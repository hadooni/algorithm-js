// Solution 1
function solution(num) {
  let number = 0;
  for (let i = 0; i < 500; i++) {
    if (num !== 1) {
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    } else {
      return (number = i);
    }
  }
  return (number = -1);
}
