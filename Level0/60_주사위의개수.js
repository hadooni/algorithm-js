// Solution 1
function solution(box, n) {
  var answer = 1;
  box.forEach((b) => (answer = answer * Math.floor(b / n)));
  return answer;
}

// Solution 2
function solution(box, n) {
  return (
    Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n)
  );
}
