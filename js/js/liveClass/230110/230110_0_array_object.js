//2. .at()
// 대상 배열을 인덱싱합니다.
// 음수 값을 사용하면 뒤에서부터 인덱싱합니다.
const arr = ['A', 'B', 'C']

console.log(arr[0]) // 'A'
console.log(arr.at(0)) // 'A'

console.log(arr[arr.length - 1]) // 'C'
console.log(arr.at(-1)) // 'C' 뒤에서 부터 조회가능


//3. .concat()
// (1)대상 배열과 (2)주어진 배열을 병합해 새로운 배열을 반환합니다.
const arr1 = ['A', 'B', 'C']
const arr2 = ['D', 'E', 'F']
const arr3 = arr1.concat(arr2)
          //대상.concat(주어진배열이 인수로);
// const arr3 = [...arr1, ...arr2] => 요즘엔 전개연산자를 사용

console.log(arr1) // ['A', 'B', 'C']
console.log(arr2) // ['D', 'E', 'F']
console.log(arr3) // ['A', 'B', 'C', 'D', 'E', 'F'] 


//4. .every()
// 대상 배열의 "모든 요소"가 "콜백 테스트를 통과"(참(Truthy)을 반환)하는지 확인합니다.
// 최초로 테스트가 실패하면, 이후 콜백은 실행되지 않고 false를 반환합니다.

const arra = [4, 5, 6, 7];
const isValids = arra.every(item => item < 5); // 다 통과를 못했기 때문에 bool= false뱉음
// 1) item=4 => item < 5; //true 통과!
// 2) item=5 => item < 5; // false 실패!
// 3) item=6 => item < 5; // false 실패!
// 4) item=7 => item < 5; // false 실패!
console.log(isValids) // false

const arra2 = [1, 2, 3, 4];
const isValids2 = arra.every(item => item < 5); // 배열데이터의 갯수만큼 실행
console.log(isValids) // true

const array = [1, 2, 3, 4]
const isValid = array.every(item => {
  console.log(item);
  return item < 3
})
// 1
// 2 : 왜 2까지만 나올까?? 3부터 이미 콜백함수가 실패해버렸기때문에 stop!
console.log(isValid) // false


//5.  .filter() Methode
// 대상 배열에서 "콜백 테스트를 통과하는 모든 요소"로 새로운 배열을 만들어 반환합니다.
// 만약 모든 요소가 테스트를 통과하지 못하면 빈 배열을 반환합니다.

const numbers = [1, 20, 7, 9, 104, 0, 58]
const filteredNumbers = numbers.filter(number => number < 30)
console.log(filteredNumbers) // [1, 20, 7, 9, 0] 
//통과한것만 배열을 만들어 반환하기 때문에 배열의 아이템 갯수가 바뀔수 있다.

const users = [
  { name: 'Neo', age: 85 },
  { name: 'Amy', age: 22 },
  { name: 'Lewis', age: 11 }
]
const adults = users.filter(user => user.age >= 19)
console.log(adults) // [ Neo객체, Amy객체 ]가 출력됨
//1) user => age: 85 >= 19 "true"
//2) user => age: 22 >= 19 "true"
//3) user => age: 11 >= 19 "false"


//6. .find() Methode
// 대상 배열에서 "콜백 테스트를 통과하는 첫 번째 요소"를 반환합니다.
// 최초로 테스트가 통과하면, 이후 콜백은 실행되지 않습니다.
// 모든 테스트가 실패하면, undefined를 반환합니다.

const array1 = [5, 8, 130, 12, 44]
const foundItem = array1.find(item => item > 10)
console.log(foundItem) // 130 "콜백 테스트를 통과하는 첫 번째 요소"를 find 메소드가 반환하고 끝

const users1 = [
  { name: 'Neo', age: 85 },
  { name: 'Amy', age: 22 },
  { name: 'Lewis', age: 11 }
]
const foundUser = users1.find(user => user.name === 'Amy') // 일치연산자로 확인
console.log(foundUser) // { name: 'Amy', age: 22 }

// 7. .findIndex()
// 대상 배열에서 "콜백 테스트를 통과하는 첫 번째 요소"의 "인덱스를 반환"합니다.
// 최초로 테스트가 통과하는 요소나 아이템이 있다면, 이후 콜백은 실행되지 않습니다.
// 모든 테스트가 실패하면, -1을 반환합니다.

const array2 = [5, 8, 130, 12, 44]
//              0  1  2    3   4
const index = array2.findIndex(item => item > 10)
console.log(index) // 2

// 8. .flat()
// 대상 배열의 "모든 하위 배열"을 "지정한 깊이(Depth)까지" 이어붙인 "새로운 배열을 반환"합니다.
// 깊이의 기본값은 1입니다.
const array3 = [1, 2, [3, 4]]
console.log(array3.flat()) // [1, 2, 3, 4]

const array4 = [1, 2, [3, 4, [5, 6]]]
console.log(array4.flat()) // [1, 2, 3, 4, [5, 6]]
console.log(array4.flat(2)) // [1, 2, 3, 4, 5, 6]

const array5 = [1, 2, [3, 4, [5, 6, [7, 8]]]]
console.log(array5.flat()) // [1, 2, 3, 4, [5, 6, [7, 8]]]
console.log(array5.flat(2)) // [1, 2, 3, 4, 5, 6, [7, 8]]
console.log(array5.flat(Infinity)) // [1, 2, 3, 4, 5, 6, 7, 8]