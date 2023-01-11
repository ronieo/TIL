const el = document.querySelector('div'); // tag선택자 사용 / = 할당(assignment)연산자
el.textContent = '갸악'; // html h1태그안에 있는 내용을 이렇게 바꿔줘라
console.log('##', el);

//===================================================================

console.log(hello); //데이터가 아닌 변수의 형태를 입력했기때문에 Uncaught ReferenceError: hello is not defined

//====================================================================

let hello
console.log(hello);//result: undefined - 선언되어 있지않다는 의미의 데이터

//====================================================================

const obst = ['Apfel', 'Banane', 'Kirsch', 'Durian'];
console.log(obst[2]); //result: Kirsch
console.log(obst.length); // result: 4
console.log(obst[obst.length-1]); // result: Durian

// JS는 "데이터와의 싸움이다..!" 데이터를 기준으로 사고하는 방식을 길러야한다.

const user = new Object();
console.log(user);

user.name = 'rone';
console.log(user);

user.age = 99;
console.log(user);


import random from './getRandom'

//console.log(random());

const a = random();

switch (a) {
  case 0:
    console.log('a is 0');
    break
  case 2:
    console.log('a is 2');
    break
  case 4:
    console.log('a is 4');
    break
  default:
}

if(a===0) {
  console.log('a is 0');
} else if(a===2) {
  console.log('a is 2');
} else if(a===4) {
  console.log('a is 4');
} else {
  console.log('rest');
}


// const userB = {

//     name: 'B',
//     age: 300,

// }

// const userA = {
//   name : 'A',
//   age: 120,
//   parent: userB
// };

// console.log(userA.parent.name);


