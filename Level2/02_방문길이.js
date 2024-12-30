/* 1. 좌표평면 경계에 유효한지 확인
   2. LRUD 에 따른 위치 이동함수 생성
   3. 시작지점 선언
   4. Set 생성자 생성후 변수에 할당
   5. dirs 하나씩 순회 
     (0) 경계 확인   
     (1) 경계에 유효하지 않으면 다음으로
     (2) 유효하면 set에 add, 반대의 경우도 add
     (3) 시작지점 업데이트
   6. set 의 size 절반 return
*/
function isValidMove(nx, ny) {
  return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5;
}

function moveCharacter(x, y, dir) {
  switch (dir) {
    case "U":
      return [x, y + 1];
    case "D":
      return [x, y - 1];
    case "R":
      return [x + 1, y];
    case "L":
      return [x - 1, y];
    default:
      break;
  }
}

function solution(dirs) {
  let x = 0;
  let y = 0;
  const moving = new Set();
  for (const dir of dirs) {
    const [nx, ny] = moveCharacter(x, y, dir);
    if (!isValidMove(nx, ny)) {
      continue;
    }
    moving.add(`${x}${y}${nx}${ny}`);
    moving.add(`${nx}${ny}${x}${y}`);
    [x, y] = [nx, ny];
  }
  return moving.size / 2;
}
