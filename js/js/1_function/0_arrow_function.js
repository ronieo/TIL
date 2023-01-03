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