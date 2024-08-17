// Solution 1
function solution(array, height) {
  const tallerPerson = array.filter((person) => person > height).length;
  return tallerPerson;
}
