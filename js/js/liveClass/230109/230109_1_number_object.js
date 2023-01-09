

//1. .toFixed()
// 숫자를 지정된 고정 소수점 표기(자릿수)까지 표현하는 문자로 반환합니다.
const numbe = 3.1415926535

console.log(numbe.toFixed(2)) // '3.14'
console.log(parseFloat(numbe.toFixed(2))) // 3.14


//2. .toLocaleString()
// 숫자를 현지 언어 형식의 문자로 반환합니다.
const number = 1000000

console.log(number.toLocaleString()) // '1,000,000' : 숫자데이터에서만 사용할 수 있음!
console.log(`${number.toLocaleString()}원`) // '1,000,000원'

//3. Number.isInteger(): 정적메소드, static methode
// 숫자가 정수(integer)인지 확인합니다.
const num = 123
const pi = 3.14

console.log(Number.isInteger(num)) // true
console.log(Number.isInteger(pi)) // false


//4. Number.isNaN():메소드 또는 isNaN():함수
// 주어진 값이 NaN인지 확인합니다.
// isNaN()보다 더 '엄격한 버전'으로 ES6에 추가된 'Number.isNaN() 사용을 권장'합니다.
// NameSpace: 이름 범위를 지정
const num1 = NaN
const num2 = 123
const strr = 'Hello world'
const nul = null

console.log(Number.isNaN(num1)) // true
console.log(Number.isNaN(num2)) // false
console.log(Number.isNaN(strr)) // false
console.log(Number.isNaN(nul)) // false


//5. Number.parseInt() 또는 parseInt()
//실질적인 기능차이는 없다고 함
// 주어진 값(숫자, 문자)을 파싱해 특정 진수(radix)의 정수로 반환합니다.
// Number.parseInt()는 ES6에서 전역 객체의 모듈화를 위해 추가됐습니다.
// 10진수가 기본값이 아니기 때문에 꼭 명시하는 것이 필요함!

const strii = '3.1415926535'

// 10진수 정수로 반환!
console.log(Number.parseInt(strii, 10)) // 3 기본값이 10진수가 아니기때문에 두번째인수에 10이 꼭필요
console.log(Number.parseInt(num, 10)) // 3
// 다음과 같은 경우 NaN를 반환합니다.

// 진수 값이 2보다 작거나 36보다 큰 경우
// 공백이 아닌 첫 문자를 숫자로 변환할 수 없는 경우
// Number.parseFloat() 또는 parseFloat()
// 주어진 값(숫자, 문자)을 파싱해 부동소수점 실수로 반환(숫자)합니다.
// Number.parseFloat()는 ES6에서 전역 객체의 모듈화를 위해 추가됐습니다.

const str = '3.1415926535'
const nummm = 3.1415926535

console.log(Number.parseFloat(str)) // 3.1415926535
console.log(Number.parseFloat(nummm)) // 3.1415926535


//6. Number.parseFloat() 또는 parseFloat() : 10진수가 아니여도 된다
// 주어진 값(숫자, 문자)을 파싱해 부동소수점 실수로 반환(숫자)합니다.
// Number.parseFloat()는 ES6에서 전역 객체의 모듈화를 위해 추가됐습니다.

const strrring = '3.1415926535'
const nummmber = 3.1415926535

console.log(Number.parseFloat(strrring)) // 3.1415926535
console.log(Number.parseFloat(nummmber)) // 3.1415926535