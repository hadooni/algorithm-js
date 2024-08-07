// Solution 1
function solution1(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

// Solution 2 - sort() 없이 해보기
/* 
1. 정렬
1-1 배열 중 가장 작은 값을 찾는다.
1-2 찾으면 새 배열에 넣는다.
1-3 원래 배열의 찾은 값은 지운다. 
1-4 만약 원래배열 길이만큼 반복했으면 끝낸다. 아니면 1-1로 돌아간다. 
2. 가운데 값 꺼내기(배열길이/2 값의 몫 구하기)
*/

function solution2(array) {
  let newArray = [];
  for (let j = 0; j < array.length; j++) {
    let minNumber = 1000;
    // 배열에서 최소값 찾기
    for (let i = 0; i < array.length; i++) {
      if (minNumber > array[i]) {
        minNumber = array[i];
      }
    }
    // 찾은 최소값 새 배열에 넣기
    newArray.push(minNumber);
    // 원래 배열에서 찾은값 지우기
    for (let a = 0; a < array.length; a++) {
      if (minNumber === array[a]) {
        array[a] = 1000;
        break;
      }
    }
  }
  return newArray[Math.floor(array.length / 2)];
}
