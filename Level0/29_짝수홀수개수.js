// Solution 1
function solution(num_list) {
  const even = num_list.filter((n) => n % 2 === 0).length;
  return [even, num_list.length - even];
}
