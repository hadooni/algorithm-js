// Solution 1
function solution(arr) {
  const minNum = Math.min(...arr);
  return arr.length > 1 ? arr.filter((n) => n !== minNum) : [-1];
}
