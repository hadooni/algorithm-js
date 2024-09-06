// Solution1
function solution(array) {
  return (array + "").split("").filter((n) => n === "7").length;
}
