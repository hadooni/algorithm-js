// Solution 1
// 1. 수포자들의 패턴
// 2. 수포자들의 점수를 저장할 패턴
// 3. 수포자들의 패턴과 답안 비교
// 4. 가장 높은 점수 저장
// 5. 가장 높은 점수를 받은 수포자의 번호를 찾아서 배열에 담기
function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let score = [0, 0, 0];

  for (let [i, answer] of answers.entries()) {
    for (let [j, pattern] of patterns.entries()) {
      if (answer === pattern[i % pattern.length]) {
        score[j] += 1;
      }
    }
  }

  const highestScore = Math.max(...score);
  let findNumber = [];
  for (let i = 0; i < score.length; i++) {
    if (highestScore === score[i]) {
      findNumber.push(i + 1);
    }
  }
  return findNumber;
}

// Solution 2
function solution(answers) {
  var answer = [];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == man1[i % man1.length]) count[0]++;
    if (answers[i] == man2[i % man2.length]) count[1]++;
    if (answers[i] == man3[i % man3.length]) count[2]++;
  }

  const max = Math.max(...count);
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) answer.push(i + 1);
  }

  return answer;
}
