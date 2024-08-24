// Solution 1
function solution(my_string) {
  const vowel = "aeiou";
  return my_string
    .split("")
    .filter((s) => !vowel.includes(s))
    .join("");
}

// Solution 2
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}

// /aeiou/ -> "aeiou" 를 ""로 대체
// /[aeiou]/ -> "a" 또는 "e" 또는 "i" 또는 "o" 또는 "u" 를 ""로 대체
// /[aeiou]/g -> g : 문자열 내 모든 패턴 검색!, 플래그가 없으면 일치하는 첫번째 요소만 바뀐다.
