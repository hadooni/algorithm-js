// Solution 1
function solution(A, B) {
  let arr = [...A];
  if (A === B) return 0;
  for (let i = 1; i <= A.length; i++) {
    let last = arr.pop();
    arr.splice(0, 0, last);
    if (arr.join("") === B) return i;
  }
  if (A !== B) return -1;
}

// Solution 2
let solution = (a, b) => (b + b).indexOf(a);
