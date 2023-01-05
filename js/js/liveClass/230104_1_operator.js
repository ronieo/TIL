// 비교연산자
console.log(
  NaN && {} && 123 //NaN: 먼저 출력되는 falsy가 출력: 하나라도 false면 false
)

console.log(
  1 || false || 123 //1: 먼저 출력되는 truthy 출력, 왜? 하나라도 true면 true
)

console.log(
  1 || false || 123 //1: 먼저 출력되는 truthy 출력, 왜? 하나라도 true면 true
)


//Nullish 병합(Nullish Coalescing): null, undefined를 같이 지칭하는 단어 ??로 저 두개만 구분한다.
//null, undefined이 아닌 것 만 출력된다.



// 삼항 연산자: Ternary
// 1번째 항 ? 2번째항 : 3번째항
const a = 1

if (a < 2) {
  console.log('참!'); // 출력
} else {
  console.log('거짓..');
}

// 조건 ? 값1 : 값2
console.log(a < 2 ? '참!' : '거짓..'); //참!

function getAlert(message) {
  return message ? message : '메시지가 존재하지 않습니다!'
}

console.log(getAlert('안녕하세요~')) // '안녕하세요~'
console.log(getAlert()) // '메시지가 존재하지 않습니다!'


// 구조분해 할당(Destructuring assignment): 배열이나 객체의 구조에 맞게 바로 개별 변수에 값을 할당하는 방법

//기본
const arr = [1, 2, 3]
const [aa, b, c] = arr

console.log(aa, b, c)  // 1 2 3

//선언과 할당하는 방법도 있다
const arrr = [1, 2, 3]
let d, e, f
[d, e, f] = arr

console.log(d, e, f) // 1 2 3

//기본값: 값이있으면 그 값을 쓰고 값이 없으면 0을 사용
const aarr = [, , 3]// 가령 값이 있다면 아래 배열이 아닌 이 배열이 콘솔에 출력됨
const [g = 0, h, i] = arr

console.log(g, h, i)
// 0 undefined 3


// *** 객체 구조 분해(Object destructuring)
// 객체는 순서가 없고, 속성의 '이름'으로 매칭해서 할당함
// 내가 꺼내 사용할 변수의 이름만 정확히 써주면됨

//기본값
const obj = { ccc: 3 }
const { aaa = 0, bbb, ccc : x = 0 } = obj
//               꺼내는이름:사용할이름
console.log(aaa, bbb, x) 
// 0 undefined 3

// 객체 데이터에서 없는 값을 찾으면 undefined가 출력된다.
// 조건문에서 else구문을 안쓸 수 있으면 쓰지 않고 return으로 마무리 하면 된다.