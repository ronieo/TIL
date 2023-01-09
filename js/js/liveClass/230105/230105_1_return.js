/** JS DOC
 * 숫자 데이터를 받아서 1을 더해 숫자로 반환하는 함수
 * @param {*} num number를 인수로 받는다
 * @returns 
 */

function plus(num) {
  if (!num) {
    console.log('숫자를 입력해주세요!')
    return 0
  }
  return num + 1
}

console.log(plus(2)) // 3
console.log(plus(7)) // 8
console.log(plus()) // 0


