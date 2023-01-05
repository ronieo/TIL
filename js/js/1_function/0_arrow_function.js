//arrow function
// () => {} vs function () {}

const double = function (x) {
  return x * 2;
}
console.log('double: ', double(7));

// 단순 실행문을 구현할때 유용
const doubleArrow = (x) => {
  return x * 2;
}
console.log('doubleArrow: ', doubleArrow(7));

const doubleArrowShort = (x) =>  x * 2; //중괄호와 리턴 생략가능
console.log('doubleArrowShort: ', doubleArrowShort(7));

const doubleArrowMoreShort = x =>  x * 2; // 매개변수가 하나만 있을 때 괄호도 생략 가능
console.log('doubleArrowMoreShort: ', doubleArrowMoreShort(7));

//객체 데이터를 반환할 때
const doubleArrowObject = x => ({name: 'NuGu'}); // 객체 데이터 반환 시, 꼭 소괄호

/**
 * 화살표 함수 사용패턴
 */
const a = () => {} // 매개변수가 없을 경우
const b = x => {} // 매개변수 1개는 소괄호 생략 가능
const c = (x, y) => {} // 매개변수가 없거나 2개 이상은 소괄호를 생략 불가
const d = x => { return x * x } 
const e = x => x * x // 함수가 `return`으로 시작하면 `{}`와 `return` 생략 가능
const f = x => { // 함수가 `return`으로 시작하지 않으면 생략 불가
  console.log(x * x)
  return x * x
}
const g = () => { return { a: 1 } }
const h = () => ({ a: 1 }) // 객체 데이터는 `{}` 기호를 사용하기 때문에 소괄호로 묶어야 함
const i = () => { return [1, 2, 3] }
const j = () => [1, 2, 3]