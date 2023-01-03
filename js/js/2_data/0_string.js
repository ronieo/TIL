// JS DATA

// String: "", '', ``


// .indexOf()
const res = 'Hello world!! hier is korea'.indexOf('was');
console.log(res); //일치하는 값이 없으면 -1 반환

// .length
const str = '0123';
console.log(str.length); //4

// with boolean, .slice(), .replace()
const boolStr = 'Hello world!!';
console.log(boolStr.indexOf('world') !== -1); // true
console.log(boolStr.slice(0, 3)); // Hel: 두번째 인수 3의 바로 앞자리까지만 출력되기때문
console.log(boolStr.replace('world', 'rabbit')); // Hello rabbit!!
console.log(boolStr.replace(' world', '')); // Hello!!

// .match()
const email = 'doremi@gmail.com';
console.log(email.match(/.+(?=@)/)); //정규표현식 사용 - @앞의 내용을 배열 데이터로 출력: ['doremi', index: 0, input: 'doremi@gmail.com', groups: undefined]
console.log(email.match(/.+(?=@)/)[0]); //정규표현식 사용 - @앞의 내용을 배열 데이터로 출력: doremi

// .trim()
const emptyStr = '           Heelloo world   ';
console.log(emptyStr.match(/.+(?=d)/)[0]); //            Heelloo worl
console.log(emptyStr.trim()); //Heelloo world 연결된 공백이 사라짐