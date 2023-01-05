// 밖에서들어오는 값을 받아주는 역할
// = 기호를 사용한다.
function sum(a, b = 1) {
  return a + b
}
console.log(sum(2)) // 3

//==========================================
// 구조분해할당
const user = {
  name: 'HEROPY',
  age: 85,
  // email: 'theseco@gmail.com'
}

//객체를 getName함수에서 호술에서 name을 매개변수로 사용함과 동시에
// 꺼내 쓰도록하겠다.
function getName({ name }) {
  return name
}
//객체구조할당의 기본구조
function getEmail({ email = '이메일이 없습니다.' }) {
  return email
}

console.log(getName(user)) // 'HEROPY'
console.log(getEmail(user)) // '이메일이 없습니다.'


const fruits = ['Apple', 'Banana', 'Cherry']
const numbers = [1, 2, 3, 4, 5, 6, 7]

function getSecondItem([,b]) { // 배열구조분해할당
//function getSecondItem(arr) { // 배열구조분해할당
  // const {b} = arr
return b
}
console.log(getSecondItem(fruits)) // 'Banana'
console.log(getSecondItem(numbers)) // 2

//==========================================

// 나머지 매개변수
function sum(...rest) { //매개변수역할이 되면 값을 다 합쳐주는 역할이됨
  console.log(rest) // [1, 2, 3, 4, 5, 6, 7, 8]
  return rest.reduce((acc, cur) => acc + cur)
}

const res = sum(1, 2, 3, 4, 5, 6, 7, 8) //뿌려진인수가 몇개든
console.log(res) // 받음 36
