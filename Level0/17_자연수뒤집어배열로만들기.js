// Solution 1
function solution(n) {
  return n
    .toString()
    .split("")
    .map((str) => Number(str))
    .reverse();
}
