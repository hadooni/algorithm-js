/* 1. 경우를 저장할 변수 초기화, 빈 스택 생성
   2. for문으로 문자열 회전시키면서 참조할 문자열 저장(+문자열 확인하는 변수 초기화(true))
   3. 열린 괄호 푸시
   4. 열린 괄호 없을 경우 중단, 다음으로
   5. 닫힌 괄호는 스택의 top 과 짝 비교(짝 일치 시 pop, 짝 없으면 중단)
   6. 모든 괄호의 짝이 맞는 경우 answer +1
   7. answer 반환 */
function solution(s) {
  const n = s.length;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    const stack = [];
    let isCorrect = true;
    for (let j = 0; j < n; j++) {
      const c = s[(i + j) % n];
      if (c === "(" || c === "{" || c === "[") {
        stack.push(c);
      } else {
        if (stack.length === 0) {
          isCorrect = false;
          break;
        }
        const top = stack[stack.length - 1];
        if (
          (top === "(" && c === ")") ||
          (top === "{" && c === "}") ||
          (top === "[" && c === "]")
        ) {
          stack.pop();
        } else {
          isCorrect = false;
          break;
        }
      }
    }
    if (isCorrect && stack.length === 0) {
      answer += 1;
    }
  }
  return answer;
}
