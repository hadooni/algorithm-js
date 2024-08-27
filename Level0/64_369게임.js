// Solution 1
function solution(order) {
  return (order + "")
    .split("")
    .filter((n) => n === "3" || n === "6" || n === "9").length;
}
