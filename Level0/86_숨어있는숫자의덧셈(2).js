// Solution 1
function solution(my_string) {
  return my_string.split(/[a-z]/gi).reduce((a, b) => a + Number(b), 0);
}
