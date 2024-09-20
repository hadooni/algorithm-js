// Solution 1
function solution(money) {
  let glassOfCoffee = Math.floor(money / 5500);
  let change = money % 5500;
  return [glassOfCoffee, change];
}
