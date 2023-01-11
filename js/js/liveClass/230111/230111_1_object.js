// ### 1. Object.assign()
// 하나 이상의 출처(Source) 객체로부터 대상(Target) 객체로 속성을 복사하고 대상 객체를 반환합니다.

const target = { a: 1, b: 2 }
const source1 = { b: 3, c: 4 }
const source2 = { c: 5, d: 6 }
const result = Object.assign(target, source1, source2)
console.log(target) // { a: 1, b: 3, c: 5, d: 6 }
console.log(result) // { a: 1, b: 3, c: 5, d: 6 }


//새로운 객체를 반환하려면, 빈 객체를 대상으로 추가할 수 있습니다.
const target1 = { a: 1, b: 2 }
const source11 = { b: 3, c: 4 }
const source22 = { c: 5, d: 6 }


//리터럴방식은 리터럴이 만들어지는 최초 시점에서 데이터가 만들어진다! 여기서는 {}
const result1 = Object.assign({}, target, source1, source2)// 객체를 복사할 때 보통 이렇게 사용
console.log(target) // { a: 1, b: 2 }
console.log(result) // { a: 1, b: 3, c: 5, d: 6 }


//전개 연산자를 사용할 수도 있습니다.
const target2 = { a: 1, b: 2 }
const source111 = { b: 3, c: 4 }
const source222 = { c: 5, d: 6 }
const result2 = {
  ...target2,
  ...source111,
  ...source222
} // {} + ... 전개연산자 => shallow copy(표면만 복사한다)
console.log(target) // { a: 1, b: 2 }
console.log(result) // { a: 1, b: 3, c: 5, d: 6 }



// ### 2. Object.entries()
// 주어진 객체의 각 속성과 값으로 하나의 배열 만들어 요소로 추가한 2차원 배열을 반환합니다.

const user2 = {
  name: 'Heropy',
  age: 85,
  isValid: true,
  email: 'thesecon@gmail.com'
}
console.log(Object.entries(user2)) 
//Object.entries()는 [] 하나를 만들고 그 안에 각 객체요소마다 배열로 감싸버림
// [
//   ['name', 'Heropy'], 
//   ['age', 85], 
//   ['isValid', true], 
//   ['email', 'thesecon@gmail.com']
// ]

for (const [key, value] of Object.entries(user2)) { // for(of)는 배열!
  console.log(key, value)
}
// name Heropy
// age 85
// isValid true
// email thesecon@gmail.com

Object.keys(user2).forEach(key =>{
  user2[key];
})
Object.values(user2).forEach(value =>{
  user2[value]
})


// ### 3. Object.defineProperty()
//주어진 객체에 속성을 추가하거나, 특성을 변경합니다.
const user3 = {
  _name: 'Heropy'
}
Object.defineProperty(user3, 'name', {
  //Getter⭐⭐⭐⭐값을 얻으려고하는 행위감시가 가능하다
  get() {
    console.log('값을 얻으려합니다.');
    return this._name // this === user3
  },
  //Setter⭐⭐⭐⭐값을 지정하려고하는 행위감시가 가능하다
  set(value) { // 할당연산자로 지정한 user3.name가 value매개변수로 들어간다
    console.log('값을 지정하려합니다.');
    this._name = value
    console.log(`이름이 ${value}로 바뀌었습니다!`)
  }
})

// Get!
console.log(user3.name) // 'Heropy'

// Set!
user3.name = 'Neo' // '이름이 Neo로 바뀌었습니다!' 할당연산자로 지정하면 line 84

for (let key in user3) {
  console.log(key) // '_name'
}