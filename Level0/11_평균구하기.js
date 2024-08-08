// Solution 1
function solution(arr) {
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
}

// Solution 2
function solution(arr) {
  let sum = arr.reduce((a, b) => a + b);
  return sum / arr.length;
}
