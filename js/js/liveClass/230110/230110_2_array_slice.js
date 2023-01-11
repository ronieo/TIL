//1. .slice()
// 대상 배열의 일부를 추출해 새로운 배열을 반환합니다. 수정되지 않는다
// 두 번째 인수 '직전까지' 추출하고, 두 번째 인수를 생략하면 대상 배열의 끝까지 추출합니다.
const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
//            0    1    2    3    4    5    6
//            -7   -6   -5   -4   -3   -2   -1

console.log(arr.slice(0, 3)) // ['A', 'B', 'C']
console.log(arr.slice(4, -1)) // ['E', 'F']
console.log(arr.slice(4)) // ['E', 'F', 'G'] 
console.log(arr) // ['A', 'B', 'C', 'D', 'E', 'F', 'G']


//2.  .some(하나이상) <=> .every(모두통과)
// 대상 배열의 어떤 요소라도 콜백 테스트를 통과하는지 확인합니다.
const arr1 = [1, 2, 3, 4]
const isValid = arr1.some(item => item > 3)

console.log(isValid) // true


//3. .sort()⭐⭐⭐⭐⭐
// 대상 배열을 '콜백의 반환 값에 따라 정렬'합니다.
// 콜백을 제공하지 않으면, 요소를 문자열로 변환하고 유니코드 코드 포인트 순서로 정렬합니다.
// 대상 배열 원본이 변경됩니다.

// 콜백의 반환 값:

// 음수: a를 낮은 순서로 정렬
// 0: 순서 변경 없음
// 양수: b를 낮은 순서로 정렬
const numbers = [4, 17, 2, 103, 3, 1, 0]

numbers.sort() // 원본배열이 수정된다
console.log(numbers) // [0, 1, 103, 17, 2, 3, 4] : 콜백제공 하지않아서 유니코드 포인트 순서

numbers.sort((a, b) => a - b) // 배열 요소를 피연산자로 두고 연산해서 음수라면 a기준으로 낮은 순서로 정렬
console.log(numbers) // [0, 1, 2, 3, 4, 17, 103]

numbers.sort((a, b) => b - a)
console.log(numbers) // [103, 17, 4, 3, 2, 1, 0]

const users = [
  { name: 'Neo', age: 85 },
  { name: 'Amy', age: 22 },
  { name: 'Lewis', age: 11 }
]
users.sort((a, b) => a.age - b.age)
console.log(users) // [ Lewis객체, Amy객체, Neo객체 ]>> 값이 크면 뒤로 밀려 난다

// users.sort((a, b) => b.age - a.age)
// console.log(users) // [ Neo객체, Amy객체, Lewis객체 ]



//4. .splice()
// 대상 배열에 요소를 추가하거나 삭제하거나 교체합니다.
// 대상 배열 원본이 변경됩니다.

// 요소 추가
const array2 = ['A', 'B', 'C']
arr.splice(2, 0, 'X')

console.log(array2) // ['A', 'B', 'X', 'C']

//요소 삭제
const array3 = ['A', 'B', 'C']
arr.splice(1, 1)

console.log(arr) // ['A', 'C']

//요소 교체
const array4 = ['A', 'B', 'C']
arr.splice(1, 1, 'X')

console.log(arr) // ['A', 'X', 'C']

//요소 추가 및 삭제
const array5 = ['A', 'B', 'C']
arr.splice(0, 0, 'X', 'Y', 'Z')

console.log(arr) // ['X', 'Y', 'Z', 'A', 'B', 'C']