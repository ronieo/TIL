// ~문 이라고 끝나는 것을 구문 Statement라고함

// 1. if
function isPositive(number) {
  if (number > 0) {
  //피연산자 > 피연산자
    return '양수'
  }
  //return undefined가 생략
}

console.log(isPositive(1)) // 함수가 호출되면 데이터가 남음 '양수'
console.log(isPositive(10)) // '양수'
console.log(isPositive(-2)) // undefined


// 2. if else
function isPositivee(number) {
  if (number > 0) {
    return '양수'
  } else if(number < 0){
    return '음수'
  } else {
    return '0'
  }
}

console.log(isPositivee(1)) // '양수'
console.log(isPositivee(10)) // '양수'
console.log(isPositivee(-2)) // '음수'
console.log(isPositivee(0)) // '0'


// 3. switch - 모든 switch문은 if문으로 바꿀 수 있음
// 언제 사용하는가? 

switch (조건) {
  case 값1:
    // 조건이 '값1'일 때 실행
    break
  case 값2:
    // 조건이 '값2'일 때 실행
    break
  default:
    // 조건이 '값1'도 '값2'도 아닐 때 실행
}

function price(fruit) {
  switch (fruit) {
    case 'Apple':
    case 'Orange': //중복 조건을 넣을 수도 있음, 다만 뭐는 뭐다 라고 딱 떨어지는 상황일 때
      return 1000 //return키워드는 값을 함수밖으로 꺼내주면서 함수도 종료시켜버림
    case 'Banana':
      return 1500 // 원래는 break를 넣는건데 return이 그 역할을 해줌
    case 'Cherry':
      return 2000
    default:
      return 0
  }
}

console.log(price('Apple')) // 1000
console.log(price('Cherry')) // 2000
console.log(price('Hello')) // 0


// 4. for
for (초기화; 조건; 증감) {
  // 실행 코드
}

// for of 배열 
const 배열 = [1, 2, 3] //일부반복은 불가하다

for(const 변수이름 of 배열) {
  console.log(변수이름);
}

// for in 객체
// 객체의 순서는 허상이다, 배열처럼 순서를 보장하지않음
const user = {
  name: 'sisi',
  age: 20,
  isValid: true,
  email: 'ganadara@gmail.com'
}

for (const key in user) {
  console.log(key, user[key])
}
// name sisi
// age 20
// isValid true
// email ganadara@gmail.com



// 5. while 무한루프 조심!!
while (조건) {
  // 
}

let n = 0
while (n < 4) {
  console.log(n)
  n += 1
}
// 0
// 1
// 2
// 3