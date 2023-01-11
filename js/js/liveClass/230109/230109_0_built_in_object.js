// 표준 내장 객체 Standard built-in objects
// 정적, 동적 메소드 구분하기
//.으로 시작하는 것들은 prototype

// JS의 핵심은 데이터를 잘 다루는것..!!

// 1. .length
const str = 'Hello world!' // 모노스페이스: 고정너비글꼴
//           012345678901
console.log(str.length) // str길이가 얼마니: 12


// 2. .includes()
//찾기 시작할 위치를 두 번째 인수로 추가할 수 있습니다. 기본값은 0입니다
const stri = 'Hello world!'

console.log(stri.includes('Hello')) // true
console.log(stri.includes('Hello', 1)) // false: 찾기 시작한 위치부터
console.log(stri.includes('any')) // false


//3. .padStart()
// 대상 문자의 길이(length)가 지정된 길이보다 작으면,
// 주어진 문자을 지정된 길이가 될 때까지 앞에 붙여 새로운 문자를 반환합니다.
const strin = '1234567'

console.log(strin.padStart(10, '0')) // '0001234567'
console.log(strin) // '1234567'


//4.  .padEnd()
// 대상 문자의 길이(length)가 지정된 길이보다 작으면,
// 주어진 문자을 지정된 길이가 될 때까지 끝에 붙여 새로운 문자를 반환합니다.
const string = '1234567'

console.log(string.padEnd(10, '0')) // '1234567000': 
console.log(string) // '1234567'

//5.  .replace() ⭐
// 대상 문자에서 패턴(문자, 정규식)과 일치하는 부분을 교체한 새로운 문자를 반환합니다.
const strr = 'Hello, Hello?!'

// 대상문자.replace(찾을문자, 바꿀문자)
// 대상문자.replace(찾을문자_정규표현식, 바꿀문자)
console.log(strr.replace('Hello', 'Hi')) // 'Hi, Hello?!'
console.log(strr.replace(/Hello/g, 'Hi')) // 'Hi, Hi?!'
console.log(/정규식/플래그);
console.log(strr) // 'Hello, Hello?!'


//6. .slice()
// 대상 문자의 일부를 추출해 새로운 문자를 반환합니다.
// 두 번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 문자의 끝까지 추출합니다.

const strri = 'Hello world!'
//           012345678901
//          -210987654321

console.log(strri.slice(0, 5)) // 'Hello': 정확히는 0번부터 4번까지의 문자만 추출. 5번째는 띄어쓰기라서
console.log(strri.slice(6, -1)) // 'world': -1이 여기선 !
console.log(strri.slice(6)) // 'world!': 2번째 인수생략하면 끝까지 출력
console.log(strri) // 'Hello world!'


//7. .split()
// 대상 문자를 주어진 구분자로 나눠 '배열'로 반환합니다.
const strrii = 'Apple, Banana, Cherry'

console.log(strrii.split(', ')) // ['Apple', 'Banana', 'Cherry']
const strriin = 'Apple'
console.log(strriin.split('').reverse().join('')) // elppA


//8. .startsWith()
// 대상 문자가 주어진 문자로 시작하는지 여부를 반환합니다.
// 탐색할 시작 위치를 지정할 수 있습니다.
const strriinn = 'Hello world!'

console.log(strriinn.startsWith('Hello', 0)) // true: 두번째인수는 생략가능하고 기본값은 0
console.log(strriinn.startsWith('world', 0)) // false
console.log(strriinn.startsWith('world', 6)) // true


//10. .trim()⭐
// 대상 문자의 앞뒤 공백 문자(space, tab 등)를 제거한 새로운 문자를 반환합니다.
const stringg = '   Hello world!  '

console.log(stringg.trim()) // 'Hello world!!'
console.log(stringg) // '   Hello world!  '