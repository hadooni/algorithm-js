// Solution 1
function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
  }
  return answer / numbers.length;
}

// Solution 2
function solution(numbers) {
  let sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}
