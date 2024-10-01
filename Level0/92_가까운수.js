// Solution 1
function solution(array, n) {
  const newArr = array
    .sort((a, b) => a - b)
    .map((i) => (i > n ? i - n : n - i));
  const idx = newArr.indexOf(Math.min(...newArr));
  return array[idx];
}

// Solution 2
function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);
  return array[0];
}
