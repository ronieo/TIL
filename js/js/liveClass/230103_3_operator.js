// 1. 산술(Arithmetic)
console.log(1 + 2)  // 3
console.log(5 - 7)  // -2
console.log(3 * 4)  // 12
console.log(10 / 2) // 5
console.log(7 % 5)  // %나머지 연산자 2

const number = [3, 10, 11, 24, 37];

for(const n of number) {
  if( number % 2 === 0) {
    console.log(n);
  }
}


// 2. 할당(Assignment)
let a = 3

// a = a + 2
a += 2

// a = a - 2
a -= 2

// a = a * 2
a *= 2

// a = a / 2
a /= 2

// a = a % 2
a %= 2

console.log(a) // 5, 1, 6, 1.5, 1