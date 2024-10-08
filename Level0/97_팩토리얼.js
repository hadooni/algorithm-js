// Solution 1
function solution(n) {
  let fac = 1;
  let i = 0;
  while (fac <= n) {
    i++;
    fac *= i;
  }
  return i - 1;
}
