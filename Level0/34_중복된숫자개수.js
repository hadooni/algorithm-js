// Solution 1
function solution(array, n) {
  const howManyNum = array.filter((num) => num === n).length;
  return howManyNum;
}
