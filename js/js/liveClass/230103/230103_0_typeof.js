const data = {
  string: '123',
  number: 123,
  boolean: true,
  null: null,
  undefined: undefined,
  symbol: Symbol('Hello'),
  bigint: 123n,
  array: [],
  object: {},
  function: function () {}
}

// 방법 1. .typeof DATA
//typeof 키워드 한계: object, array, null은 제대로 활인 할 수 없음
console.log(typeof data.string) // 'string'
console.log(typeof data.number) // 'number'
console.log(typeof data.boolean) // 'boolean'
console.log(typeof data.null) // 'object'
console.log(typeof data.undefined) // 'undefined'
console.log(typeof data.symbol) // 'symbol'
console.log(typeof data.bigint) // 'bigint'
console.log(typeof data.array) // 'object'
console.log(typeof data.object) // 'object'
console.log(typeof data.function) // 'function'


//때문에 방법 2. .constructor사용하기
// DATA.constructor
console.log(data.string.constructor === String)
console.log(data.number.constructor === Number)
console.log(data.boolean.constructor === Boolean)
console.log(data.null.constructor) // TypeError!, 한계
console.log(data.undefined.constructor) // TypeError! , 한계
console.log(data.symbol.constructor === Symbol)
console.log(data.bigint.constructor === BigInt)
console.log(data.array.constructor === Array) //typeof에선 알수 없었던 타입을 알 수 있음
console.log(data.object.constructor === Object)//typeof에선 알수 없었던 타입을 알 수 있음
console.log(data.function.constructor === Function)


//3. 방법 3. checkType 함수 만들기
// Object.prototype.toString.call(DATA) 
// '[object TYPE]'
function checkType(d) { // parameter of d
  return Object.prototype.toString.call(d).slice(8, -1)
}
console.log(checkType(data.string)) // 'String'
console.log(checkType(data.number)) // 'Number'
console.log(checkType(data.boolean)) // 'Boolean'
console.log(checkType(data.null)) // 'Null'
console.log(checkType(data.undefined)) // 'Undefined'
console.log(checkType(data.symbol)) // 'Symbol'
console.log(checkType(data.bigint)) // 'BigInt'
console.log(checkType(data.array)) // 'Array'
console.log(checkType(data.object)) // 'Object'
console.log(checkType(data.function)) // 'Function'