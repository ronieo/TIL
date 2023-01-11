// JS DATA

// Array: []

const num = [1, 2, 3, 4];
const obst = ['Apfel', 'Banane', 'Kirsh']; //각 Element의 순서를 index라고함

console.log(num); //(4) [1, 2, 3, 4]
console.log(num[1]); //2 : indexing이라고함
console.log(obst); // (3) ['Apfel', 'Banane', 'Kirsh'] 
console.log(obst[2]); // Kirsh

// // .find(): 주어진 판별함수를 만족하는 첫번째 아이템을 출력.
const arr1 = [3, 10, 25, 46, 76, 58, 190, 222];

const found = arr1.find(e => e > 50); //arr1의 아이템의 갯수만큼 콜백함수 발동
console.log(found);

// // .concat(): 두개의 배열데이터를 병합해서 새로운 배열데이터를 반환해주고, 원본데이터는 손상되지않음
// 배열의 api 활용시 주의해야하기 때문에 인지하고 있어야하는 메소드
console.log(num.concat(obst));
console.log(num);
console.log(obst);

// // .forEach(): 메소드에 붙어있는 배열데이터 만큼 콜백함수(여기서 function() {})가 반복적으로 실행
obst.forEach(function(element, index, array){ //매개변수 이름은 자유롭게, array는 자주사용하진 않음
  console.log(element, index, array);
})

obst.forEach((element, index) => console.log(element, index)) //화살표 함수로 바꾸기


// // .map(): 메소드에 붙어있는 배열데이터 만큼 콜백함수가 반복적으로 실행되고 출력된 데이터를 새로운 배열로 출력해줌
const b = obst.map(function(fruit, idx){ //매개변수 이름은 자유롭게, array는 자주사용하진 않음
  return `${fruit} - ${idx}`
})
console.log(b); //(3) ['Apfel,Banane,Kirsh - 1,2,3,4', 'Apfel,Banane,Kirsh - 1,2,3,4', 'Apfel,Banane,Kirsh - 1,2,3,4']

const c = obst.map(function(fruit, idx){  //객체데이터를 만들어서 활용할 수 있음. 많이 사용
  return {
    name: fruit,
    id: idx
  }
})
console.log(c); 

const d = obst.map((fruit, idx) => `${fruit} - ${idx}`)//화살표 함수로 바꾸기
console.log(d); 

// // .filter(): 조건에서 true인 값만 반환을 하는 메소드
const aa = num.map(nums => { // 중괄호 줄이고 실행문 만들 수 있음
  return nums < 3;
});
console.log(aa); // (4) [true, true, false, false]

const bb = num.filter(nums =>{
  return nums < 3;
});
console.log(bb); // (2) [1, 2]

// // .find(): 배열 내에서 조건에 맞는 특정 아이템을 찾으면 콜백함수 종료 
// // .findIndex(): 특정 찾아진 아이템의 인덱스를 출력하고 콜백함수 종료
const aaa = obst.find(obst =>{ return /^B/.test(obst)}); // /^B/: 정규표현식으로 대문자 B로시작하는 아이템을 출력해조라
console.log(aaa); 
const bbb = obst.findIndex(obst =>{ return /^B/.test(obst)}); // /^B/: 정규표현식으로 대문자 B로시작하는 아이템을 출력해조라
console.log(bbb); 


// // .includes(): 메소드안에 입력한 데이터의 유무를 불린값으로 출력해주는 메소드
const ab = num.includes(3);
console.log(ab);
const abc = obst.includes('podo');
console.log(abc);


// // .push(): 맨뒤 배열에 특정데이터를 밀어넣음 .unshift(): 맨앞 배열에 특정데이터를 넣어줌
// 원본 수정됨 주의! //
num.push(5);
console.log(num); // (5) [1, 2, 3, 4, 5]
num.unshift(-1);
console.log(num); // (6) [-1, 1, 2, 3, 4, 5]


// // .reverse(): 원본이 수정됨, 원본 배열의 순서가 뒤바뀜
num.reverse();
obst.reverse();
console.log(num, obst); //(6) [5, 4, 3, 2, 1, -1] (3) ['Kirsh', 'Banane', 'Apfel']


// // .splice(a, b, c): 배열 안 a의 위치에서 b개를 지워라(없다면 0) a자리에 c를 채워라: 삭제와 끼워넣기
num.splice(2, 1, 33);
console.log(num); //(6) [5, 4, 33, 2, 1, -1]