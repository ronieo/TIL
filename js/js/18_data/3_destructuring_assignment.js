//### 구조 분해 할당(Destructuring Assignment)
//비구조화 할당

const user = {
  name: 'nugu',
  age: 93,
  email: 'nugunugu@gmail.com'
}

const { name, age, address = 'Korea'} = user // =user할당연산자로 {}할당(객체를 구조분해 한 것)
//const { name: WHO, age, address = 'Korea'} = user // =user할당연산자로 {}할당(객체를 구조분해 한 것)
//        변수이름을 바꿀수 있음 name -> WHO
// E.g, user.address 점표기법과 같은 방법

console.log(`사용자의 이름은${name}입니다.`);
console.log(`${name}의 나이는 ${age}입니다.`);
console.log(`${name}의 이메일주소는 ${user.email}입니다.`);
console.log(user.address); // >> undefined: user 객체안에 address가 선언되어 있지 않기 때문
console.log(address); // >> Korea

const obsts = ['Apfel', 'Banane', 'Kirsh'];
const [a, b, c, d] = obsts; //배열은 객체와 다르게 순서대로 출력이 된다.
console.log(a, b, c, d);
//가령, Banane만 출력하고 싶을때 
//const [, b] = obsts; 
//console.log(b);