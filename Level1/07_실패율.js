/* 1. 스테이지별 도전자 수 구하기
   2. 스테입지별 실패한 사용자 수 계산
   3. 각 스테이지를 순회하면서 실패율 계산
   4. 도전한 사람이 없으면 실패율 0
   5. 실패율 계산
   6. 순회하면서 계산할 때 다음 스테이지로 넘어가기 전 현재 스테이지 인원 제거
   7. 실패율 기준 내림차순 정렬
   8. 스테이지 번호만 반환 */
function solution(N, stages) {
  const challenger = Array(N + 2).fill(0);
  for (const stage of stages) {
    challenger[stage] += 1;
  }

  let total = stages.length;
  const fail = {};
  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      fail[i] = 0;
    }
    fail[i] = challenger[i] / total;

    total -= challenger[i];
  }
  const sortedFail = Object.entries(fail).sort((a, b) => b[1] - a[1]);
  return sortedFail.map((s) => Number(s[0]));
}
