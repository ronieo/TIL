//1. .forEach()⭐⭐⭐
// 대상 배열의 길이만큼 주어진 콜백을 실행합니다.
const arr = ['A', 'B', 'C']
arr.forEach(item => console.log(item)) // 콜백만 반복해서 실행: 기다림을 보장할수없음
// console.log의    반환값은 undefined

for (let i = 0; i < arr.length; i += 1) {
  console.log(arr[i]) 
}
// 'A'
// 'B'
// 'C'

const arr1 = ['A', 'B', 'C']
//for문은 기다림을 보장함
for (let i = 0; i < arr1.length; i += 1) {
  if (i > 1) {
    break
  }
  console.log(arr1[i])
}
// 'A'
// 'B'


//2. .includes()
// 대상 배열이 특정 요소를 포함하고 있는지 확인합니다.

const arr2 = [1, 2, 3]
console.log(arr2.includes(2)) // true

const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits.includes('Apple')) // true
console.log(fruits.includes('cherry')) // false : 소문자 대문자

/*원시형데이터는 모양이같으면 일치
  참조형은 모양이 같다고해서 일치한다고 보장할 수 없다. */
const users = [
  { name: 'Neo', age: 85 },
  { name: 'Amy', age: 22 },
  { name: 'Lewis', age: 11 }
]
console.log(users.includes({ name: 'Neo', age: 85 })) // false: 메모리주소가 달라서

const neo = users[0] //직접 뽑아내서 neo라는 변수에 담으면 true
console.log(users.includes(neo)) // true


//3. .join()
// 대상 배열의 모든 요소를 구분자로 연결한 문자를 반환합니다.
const fruits1 = ['Apple', 'Banana', 'Cherry']
// 우선합쳐: AppleBananaCherry
console.log(fruits1.join('')) // AppleBananaCherry
console.log(fruits1.join()) // 'Apple,Banana,Cherry'
console.log(fruits1.join(', ')) // 'Apple, Banana, Cherry'
console.log(fruits1.join('/')) // 'Apple/Banana/Cherry'


// 4. .map()⭐⭐⭐⭐⭐⭐
// 대상 배열의 길이만큼 주어진 콜백을 실행하고,
// '콜백의 반환 값을 모아 새로운 배열을 반환'합니다.
const numbers = [1, 2, 3, 4]
const newNumbers = numbers.map(item => item * 2)
console.log(numbers) // [1, 2, 3, 4]
console.log(newNumbers) // [2, 4, 6, 8] 
// 원본데이터는 변함이 없고 새롭게 태어남 + 배열의 갯수는 바뀌지않음

const userss = [
  { name: 'Neo', age: 85 },
  { name: 'Amy', age: 22 },
  { name: 'Lewis', age: 11 }
]
const userNames = userss.map(user => user.name)
console.log(userNames) // ['Neo', 'Amy', 'Lewis']

const newUsers = userss.map(user => ({
  ...user,
  isValid: true,
  email: null
}))
console.log(newUsers) // [{ name: 'Neo', age: 85, isValid: true, email: null }, ...]


// 5. .pop() <=> .shift()
// 대상 배열에서 '마지막 요소를 제거'하고 제거한 후 요소를 반환합니다.
// 대상 배열 '원본이 변경'됩니다.
const fruits2 = ['Apple', 'Banana', 'Cherry']
console.log(fruits2.pop()) // 'Cherry'
console.log(fruits2) // ['Apple', 'Banana']


//6. .push() ⭐ <=> .unshift()
// 대상 배열의 마지막에 '하나 이상'의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
// 대상 배열 '원본이 변경'됩니다.
const fruits3 = ['Apple', 'Banana', 'Cherry']
const newLength = fruits3.push('Orange')
console.log(newLength) // 4
console.log(fruits3) // ['Apple', 'Banana', 'Cherry', 'Orange']

fruits3.push('Mango', 'Strawberry')
console.log(fruits3)
// ['Apple', 'Banana', 'Cherry', 'Orange', 'Mango', 'Strawberry']


// 어려웡.. 7. .reduce(콜백, 초깃값) 🚧⭐
// 대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 반환 값을 반환합니다.
// 각 콜백의 반환 값은 다음 콜백으로 전달됩니다.
const numberss = [1, 2, 3]

// const result = numbers.reduce((acc, cur) => acc + cur, 0)
const result = numberss.reduce((accumulator, currentValue) => { //accumulator 누적되는값
  return accumulator + currentValue
}, 0)
// 1)((0, 1) => {
//   return 0 + 1 >> 1
// }
// 2) ((1, 2) => { 
//   return 1 + 2 >> 3
// }
// 3) ((3, 3) => { 
//   return 3 + 3 >> 6
// }
console.log(result) // 6
const users2 = [
  { name: 'Neo', age: 85 },
  { name: 'Amy', age: 22 },
  { name: 'Lewis', age: 11 }
]

// 총 나이 계산
const totalAge = users2.reduce((acc, cur) => acc + cur.age, 0)
console.log(totalAge) // 118
console.log(`평균 나이: ${(totalAge / users2.length).toFixed(1)}세`) // '평균 나이: 39.3세'소수점 한자리수만 남기고 잘라라
//.toFixed() number에 사용하고 string으로 반환됨

// 모든 이름 추출
const names = users2
  .reduce((acc, cur) => {
    acc.push(cur.name)
    return acc
  }, [])//['Neo', 'Amy', 'Lewis']
  .join(', ')
console.log(names) // 'Neo, Amy, Lewis'


//7. .reverse()
// 대상 배열의 '순서를 반전'합니다.
// 대상 배열 '원본이 변경'됩니다.
const array6 = ['A', 'B', 'C']
const reversed = array6.reverse()

console.log(reversed) // ['C', 'B', 'A']
console.log(array6) // ['C', 'B', 'A']
const str = 'Hello~'
const reversedStr = str.split('').reverse().join('')

console.log(reversedStr) // '~olleH'
console.log(str) // 'Hello~'


//8. .shift() <=> .pop()
// 대상 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다.
// 대상 배열 원본이 변경됩니다.
const array7 = ['A', 'B', 'C']

console.log(array7.shift()) // 'A'
console.log(array7) // ['B', 'C']