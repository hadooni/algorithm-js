function solution(numbers) {
  var answer = [];
  // 배열의 길이만큼 push
  let numI = 0;
  while (numI < numbers.length) {
    answer.push(numbers[numI] * 2);
    numI = numI + 1;
  }
  return answer;
}

// 1. numbers에서 원소를 꺼내야함
// 2. 원소를 꺼내 2배를 한 후 새 배열에 넣어줘야함
