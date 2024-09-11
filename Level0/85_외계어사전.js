// Solution 1
function solution(spell, dic) {
  return dic.some(
    (word) => spell.sort().toString() === [...word].sort().toString()
  )
    ? 1
    : 2;
}
