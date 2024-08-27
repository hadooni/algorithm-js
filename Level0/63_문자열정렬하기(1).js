// Solution 1
function solution(my_string) {
  return my_string
    .match(/[0-9]/g)
    .map((s) => +s)
    .sort((a, b) => a - b);
}
