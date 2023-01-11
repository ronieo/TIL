//1. .splice()
// .splice(인덱스, 삭제할 개수, 추가할 요소);
// 반환값: 제거한 애들이 나오는 것

// 대상 배열에 요소를 '추가'하거나 '삭제'하거나 '교체'합니다.
// 대상 배열 '원본이 변경'됩니다.

// 요소 추가
const array2 = ['A', 'B', 'C']
arr.splice(2, 0, 'X')
console.log(array2) // ['A', 'B', 'X', 'C']

//요소 삭제
const array3 = ['A', 'B', 'C']
arr.splice(1, 1)
console.log(arr) // ['A', 'C']

//요소 교체(=== 삭제하고 추가하면)
const array4 = ['A', 'B', 'C']
arr.splice(1, 1, 'X')
console.log(arr) // ['A', 'X', 'C']

//요소 추가 및 삭제
const array5 = ['A', 'B', 'C']
arr.splice(0, 0, 'X', 'Y', 'Z')
console.log(arr) // ['X', 'Y', 'Z', 'A', 'B', 'C']


// 2. Array.from() => 정적메소드(static methode)
// 유사 배열(Array-like)을 실제 배열로 반환합니다.

// 언제 사용하면 좋을까? 여러 배열을 가져올 때, 노드리스트를 가져올 때
// 콘솔에 Prototype이 아닌 NodeList(유사배열)라고 나올 때
// ex) const liEls = document.querySelectorAll('li');

const arraylike = {
  0: 'A',
  1: 'B',
  2: 'C',
  length: 3
}

console.log(arraylike.constructor === Array) // false
console.log(arraylike.constructor === Object) // true

// arraylike.forEach(item => console.log(item)) // Error!
Array.from(arraylike).forEach(item => console.log(item))

// 'A'
// 'B'
// 'C'


// 3. Array.isArray() : 보통 is 어쩌구면 '이거맞어?'라고함
// 배열 데이터인지 확인합니다.

const array = ['A', 'B', 'C']
const arraylike3 = {
  0: 'A',
  1: 'B',
  2: 'C',
  length: 3
}

console.log(Array.isArray(array)) // true
console.log(Array.isArray(arraylike3)) // false