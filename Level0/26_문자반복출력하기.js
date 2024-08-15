// Solution 1
function solution(my_string, n) {
  return my_string
    .split("")
    .map((letter) => letter.repeat(n))
    .join("");
}

// my_string.split("") 을 구조분해할당 [...my_string] 으로 배열을 만들 수도 있다.
