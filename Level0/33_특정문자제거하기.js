// Solution 1
function solution(my_string, letter) {
  return my_string.replaceAll(letter, "");
}

// Solution 2
function solution(my_string, letter) {
  return my_string.split(letter).join("");
}
