// Solution 1
function solution(my_string) {
  return my_string
    .split("")
    .filter((n) => Number(n))
    .reduce((a, b) => a + b);
}

// Solution 2
function solution(my_string) {
  return my_string.match(/[0-9]/g).reduce((a, b) => Number(a) + Number(b));
}
