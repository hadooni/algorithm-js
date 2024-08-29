// Solution 1
function solution(numbers, direction) {
  return direction === "right"
    ? [numbers.pop(), ...numbers]
    : [...numbers.slice(1, numbers.length), numbers.shift()];
}

// Solution 2
function solution(numbers, direction) {
  direction === "right"
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());
  return numbers;
}
