// Solution 1
function solution(rsp) {
  var answer = "";
  for (let i = 0; i < rsp.length; i++) {
    if (rsp[i] === "2") {
      answer += 0;
    } else if (rsp[i] === "0") {
      answer += 5;
    } else {
      answer += 2;
    }
  }
  return answer;
}

// Solution 2
function solution(rsp) {
  const arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  return [...rsp].map((n) => arr[n]).join("");
}

// 서로 대응되는 것들이 있을 땐 객체 이용하기
