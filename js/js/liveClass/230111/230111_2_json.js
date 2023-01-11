//sesson Storege 세션스토리지는 문자데이터만!
//JSON
//JSON(JavaScript Object Notation)는 데이터 전달을 위한 표준 데이터 포맷입니다.

//String, Number, Boolean, Null, Object, Array만 사용
//문자는 큰 따옴표만 사용, 작은 따옴표 사용 불가
//후행 쉼표 사용 불가: 마지막 데이터에 붙는 ,쉼표 사용불가
//.json 확장자 사용
//.stringify()
//JavaScript 데이터를 JSON 문자로 변환합니다.


console.log(JSON.stringify('Hello world!')) // '"Hello world!"': 큰따옴표가 내부에 붙는다
console.log(JSON.stringify(123)) // '123' : JS 콘솔에 출력되서 나와서 ''붙은것
console.log(JSON.stringify(false)) // 'false'
console.log(JSON.stringify(null)) // 'null'
console.log(JSON.stringify({ name: 'Heropy', age: 85 })) // '{"name":"Heropy","age":85}'
// console.log(JSON.stringify({ name: 'Heropy', age: 85 }, null, 2))
console.log(JSON.stringify([1, 2, 3])) // '[1,2,3]'

//.parse()
//JSON 문자를 분석해 JavaScript 데이터로 변환합니다.
//** 주의할점: JSON.parse()안에 인수는 무조건 JSON포맷인 ""가 ''안에 포함된 String */

console.log(JSON.parse('"Hello world!"')) // "Hello world!"
// console.log(JSON.parse('Hello world!'))
// console.log(JSON.parse("Hello world!"))
console.log(JSON.parse('123')) // 123
console.log(JSON.parse('false')) // false
console.log(JSON.parse('null')) // null
console.log(JSON.parse('{"name":"Heropy","age":85}')) // { name: 'Heropy', age: 85 }
console.log(JSON.parse('[1,2,3]')) // [1, 2, 3]