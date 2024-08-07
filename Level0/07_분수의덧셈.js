function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  const denom = denom1 * denom2;
  const num = numer1 * denom2 + numer2 * denom1;
  let minNumber;
  if (num < denom) {
    minNumber = num;
  } else {
    minNumber = denom;
  }
  // minNumber 에는 작은 수가 들어가 있음.
  // 나누어 떨어지는 것 -> 나머지가 0인것.
  while (true) {
    if (num % minNumber === 0 && denom % minNumber === 0) {
      return [num / minNumber, denom / minNumber];
    }
    minNumber = minNumber - 1;
  }
}

// 1. 분모덧셈
// 2. 분자분모의 최대공약수로 나누기
// 2-1. 분자분모중 작은 수를 찾기
// 2-2. 작은수를 분자분모로 나눠보기
// 2-2-1. 둘다 나누어 떨어지면 그 나눈 수가 최대공약수
// 2-2-2. 안 나누어떨어지면 작은 수를 1 줄이고 2-2로 돌아가기
