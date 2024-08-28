// Solution 1
function solution(age) {
  let eAge = "abcdefghij";
  let nAge = (age + "").split("");
  return nAge.map((n) => eAge[n]).join("");
}
