// Solution 1
function solution(num, total) {
  let min = Math.ceil(total / num - Math.floor(num / 2));
  return Array.from({ length: num }, (v, i) => i + min);
}
