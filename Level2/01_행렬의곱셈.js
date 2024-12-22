// 1. 행렬 arr1과 arr2의 행과 열의 수 구하기
// 2. return 값 저장할 2차원 배열 0으로 초기화
// 3. arr1의 각 행과 arr2의 각 열에 대해
// 4. 두 행렬의 데이터를 곱해 결과 배열에 더하기
function solution(arr1, arr2) {
  const r1 = arr1.length;
  const c1 = arr1[0].length;
  const c2 = arr2[0].length;

  let answer = [];
  for (let i = 0; i < r1; i++) {
    answer.push(Array(c2).fill(0));
  }

  for (let i = 0; i < r1; i++) {
    for (let j = 0; j < c2; j++) {
      for (let k = 0; k < c1; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return answer;
}
