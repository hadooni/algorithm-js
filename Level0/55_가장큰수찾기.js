// Solution 1
function solution(array) {
  const num = [...array].sort((a, b) => a - b).pop();
  const index = array.indexOf(num);
  return [num, index];
}

// Solution 2
function solution(array) {
  return [Math.max(...array), array.indexOf(Math.max(...array))];
}
