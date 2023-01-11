// JS DATA

// Number

const pi = 3.14159265358979;
console.log(pi); // 3.14159265358979

const str = pi.toFixed(2); //숫자데이터에 사용하는 메소드: 숫자 몇번째 자리까지 유지할건지, 대신 string으로 타입이 바뀜
console.log(str); // 3.14
console.log(typeof str); // string

const integer = parseInt(str); // 전역함수 정수반환
const float = parseFloat(str); // 전역함수 소수점유지
console.log(integer); // 3
console.log(float); // 3.14
console.log(typeof integer, typeof float); // number number

// Math Object: 내장객체(js에 이미 들어있다)
console.log('abs: ', Math.abs(-15)); // abs: 15

console.log('min: ', Math.min(2,8)); // min: 2

console.log('max: ', Math.max(2, 8)); //max: 8

console.log('ceil: ', Math.ceil(2.15)); //ceil: 3 '올림처리'

console.log('floor: ', Math.floor(3.14)); //floor: 3 '내림처리'

console.log('round: ', Math.round(3.12)); //round: 3 '반올림'

console.log('random: ', Math.random()); // just random