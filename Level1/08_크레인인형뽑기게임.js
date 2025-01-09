/* 1. board 각 열에 대한 스택 만들기
   2. board 를 만든 배열에 넣어주기(거꾸로)
   3. moves 를 순서대로 순회 + 각 열에서 인형을 뽑아서 바구니에 추가
     3-1. 해당 열에 인형이 있으면 pop
     3-2. 바구니에 인형있고, 마지막 인형과 같으면 pop, answer +2
     3-3. 바구니의 인형이없거나, 마지막 인형과 다르면 push
   4. answer 반환 */
function solution(board, moves) {
  const lanes = [...Array(board[0].length)].map(() => []);
  for (let i = board.length - 1; i >= 0; i--) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j]) {
        lanes[j].push(board[i][j]);
      }
    }
  }
  const basket = [];
  let answer = 0;
  for (const m of moves) {
    if (lanes[m - 1].length > 0) {
      const doll = lanes[m - 1].pop();

      if (basket.length > 0 && basket[basket.length - 1] === doll) {
        basket.pop();
        answer += 2;
      } else {
        basket.push(doll);
      }
    }
  }
  return answer;
}
