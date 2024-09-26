function solution(s) {
  let answer = 0;
  const newS = s.split(" ");
  for (let i = 0; i < newS.length; i++) {
    if (newS[i] !== "Z") answer += +newS[i];
    if (newS[i] === "Z") answer -= +newS[i - 1];
  }
  return answer;
}
