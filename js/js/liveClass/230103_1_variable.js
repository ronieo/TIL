// var, const, let
// var X

// 1. const
//const 이름 = 데이터;

// - 블록 레벨 유효범위(Block-level scope)
// - 재할당 X
// - 중복 선언 X
// - 호이스팅 X
// - 전역 선언시 전역 객체의 속성으로 등록 X
function fn() {
  console.log(n) // ReferenceError!
  if (true) {
    //const n = 123 //다시 선언할 수 없음
    n = 456 // TypeError!
    console.log(n) // 123
    const n = 'ABC' // SyntaxError!
  }
  console.log(n) // ReferenceError!
}
fn()

console.log(n) // ReferenceError!

const xyz = 'XYZ'
console.log(window.xyz) // undefined



// 2. let
// - 블록 레벨 유효범위(Block-level scope)
// - 재할당 O
// - 중복 선언 X
// - 호이스팅 X
// - 전역 선언시 전역 객체의 속성으로 등록 X
function fn() {
  console.log(nn) // ReferenceError!
  if (true) {
    //let nn = 123
    nn = 456
    console.log(nn) // 456
    let nn = 'ABC' // SyntaxError!
  }
  console.log(nn) // ReferenceError!
}
fn()

console.log(nn) // ReferenceError!

let xyzz = 'XYZ'
console.log(window.xyzz) // undefined
