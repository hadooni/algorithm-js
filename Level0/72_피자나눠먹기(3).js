// Solution 1
function solution(slice, n) {
  return Math.floor((n + (slice - 1)) / slice);
}

// Solution 2
function solution(slice, n) {
  return Math.ceil(n / slice);
}
