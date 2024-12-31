/* 1. 스택 생성
   2. for of 로 문자열 하나씩 순회
   3. 스택이 비어있지 않고 && 스택의 최신 문자열과 순회하는 문자열이 일치하면 pop
   4. 그렇지 않으면 push
   5. 스택의 길이가 0 이면 1 아니면 0 반환 */
function solution(s) {
  const stack = [];
  for (let o of s) {
    if (stack.length > 0 && stack[stack.length - 1] === o) {
      stack.pop();
    } else {
      stack.push(o);
    }
  }
  return stack.length === 0 ? 1 : 0;
}
