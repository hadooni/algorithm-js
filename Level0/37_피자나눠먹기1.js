// Solution 1
function solution(n) {
  return Math.ceil(n / 7);
}

// Solution 2
function solution(n) {
  return n % 7 === 0 ? n / 7 : parseInt(n / 7) + 1;
}
