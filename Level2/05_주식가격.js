/* 1. prices의 길이 저장
   2. 가격이 떨어지지 않은 기간을 저장할 배열 생성
   3. 스택으로 이전 가격과 현재 가격 비교
    3-1. 스택 초기화
    3-2. 스택의 길이가 0 초과 && 스택의 top 값의 prices 가 순회하는 가격보다 크다면
    3-3. 가격이 떨어진것으로 이전 가격의 기간을 계산
    3-4. 그게 아니면 스택에 push
   4. 스택에 남아있는 가격들은 가격이 떨어지지 않은 경우이므로 answer 에 기간 저장 */
function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0);
  const stack = [0];
  for (let i = 1; i < n; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const j = stack.pop();
      answer[j] = i - j;
    }
    stack.push(i);
  }
  while (stack.length) {
    const j = stack.pop();
    answer[j] = n - j - 1;
  }
  return answer;
}
