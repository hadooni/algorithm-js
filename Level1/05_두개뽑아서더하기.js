// 1. 배열에서 두개의 수를 선택하는 모든 경우의 수 구하기
// 2. 구한 수를 새로운 배열에 저장하고 중복값 제거
// 3. 오름차순 정렬 return
function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  return [...new Set(answer)].sort((a, b) => a - b);
}
