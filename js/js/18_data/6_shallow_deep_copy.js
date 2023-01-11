// ### 얕은 복사, 깊은 복사

//### 얕은 복사
const user = {
  name: 'nugu',
  age: 93,
  emails: ['nugunugu@gmail.com']
}

const copyUser = user;
console.log('same??', copyUser === user); //>>same?? true

user.age = 22; 
// user의 나이만 바꾸려했는데 copyUser도 같이 바뀌는 결과가 나옴: 이유는 바라보고 있는 메모리주소가 같기 때문
console.log('user', user); //>>{name: 'nugu', age: 22, email: Array(1)}
console.log('copyUser', copyUser); //>>{name: 'nugu', age: 22, email: Array(1)}


console.log('====같은 결과가 나오지 않게 하려면??: Object.assign()=====');

const copyUser2 = Object.assign({}, user); // '복사'
// 새로운 대상객체(target){}이 생겨서 새로운 메모리주소에 할당
console.log('2 are same??', copyUser2 === user); //>> 2 are same?? false

user.age = 22; 
console.log('user2', user); //>>user2 {name: 'nugu', age: 93, email: Array(1)}
console.log('copyUser2', copyUser2); //>>copyUser2 {name: 'nugu', age: 22, email: Array(1)}


console.log('====전개연산자를 사용하는 방법: ... =====');

const copyUser3 = {...user}; // '전개연산자 복사'
console.log('is 3 same?', copyUser3 === user); //>>is 3 same? false

console.log('user', user); //>>
console.log('copyUser4', copyUser4); //>>


user.emails.push('babara@gmail.com');
console.log('same??',user.emails === copyUser4.emails); //>>ture
// emails는 배열데이터, 즉 참조데이터임.
// 복사처리를 한적은 없음. user객체만 복사된것.
// 때문에 emails는 따로 복사처리를 해줘야만함 + 메모리 주소만 공유 중

console.log('user.emails', user); //>>
console.log('copyUser4.emails', copyUser4); //>>





//### 깊은 복사

//import _ from 'lodash';//
// lodash공식문서에서 권장하는 방법 _표시가 객체 자체라는 뜻

const user = {
  name: 'nugu',
  age: 93,
  emails: ['nugunugu@gmail.com']
}

const copyUser5 = _.cloneDeep(user); 
// 깊은 복제(재귀적으로 복사: 반복적으로 복사해서 깊은 복사를 해서 새로운 객체로 만들기 때문에 false가 나옴)
console.log('5 is same?', copyUser5 === user); //>> 5 is same? false

user.age = 22;
console.log('user', user); //>> {name: 'nugu', age: 22, emails: Array(1)}
console.log('copyUser5', copyUser5); //>> {name: 'nugu', age: 93, emails: Array(1)}
console.log('//===================//'); 
console.log('//===================//'); 

user.emails.push('babara@gmail.com');
console.log('same??',user.emails === copyUser5.emails); //>> same?? false


console.log('user.emails', user); 
 /* >>
{name: 'nugu', age: 22, emails: Array(2)}
age: 22
emails: (2) ['nugunugu@gmail.com', 'babara@gmail.com']
name: "nugu"
*/
console.log('copyUser5.emails', copyUser5); 
/*>>
name: 'nugu', age: 93, emails: Array(1)}
age: 93
emails: ['nugunugu@gmail.com']
name: "nugu"
*/