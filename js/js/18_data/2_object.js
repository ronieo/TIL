// ### Object.assign
// Object.methode === Object라는 전역객체를 사용해야하고, 실제 직접적인 데이터 변수에 사용할 수 없음
// 정적메소드 === static methode
// 객체는 속성이 고유해야하는데, 더 나중에 들어오는 속성으로 덮어 씌워진다.

const userAge = {
  name : 'nugu',
  age : 90
}
const userContact = {
  name: 'nugu',
  email: 'nugunugu@nugu.com'
}

//Object라는 명령을 사용했다고 생각하면됨       
//                    대상객체:target, 출처객체:source(출처는 여러개가 될 수 있음)
// 소스 부분의 속성들을 타겟에 복사 해 넣어서 출력한다.
const target = Object.assign({}, userAge, userContact); // 메모리의 주소를 찾아서 사용: 참조형데이터 라고함
//                           {}: userAge가 더이상대상객체가 아닌 출처 객체가됨 + {}는 새로운 객체로 탄생
console.log(target); // 서로 같은 메모리 주소를 바라보고있음
console.log(userAge); // 서로 같은 메모리 주소를 바라보고있음
console.log(target === userAge); // true

const a = { k: 123};
const b = { k: 123};
console.log(a===b); // 각각 다른 메모리 주소를 갖고있기때문에 false가 나옴


// ### Object.keys()
const user = {
  name : 'nugu',
  age : 90,
  email: 'nugunugu@nugu.com'
}

const keys = Object.keys(user); // Object.keys()라는 메소드를 통해 정적으로 변수 keys에 담겨 출력
console.log(keys); // >> ['name', 'age', 'email']

console.log(user['email']);

const values = keys.map(key => user[key]); //콜백함수는 배열의 갯수인 3번 돌아가고, key parameter에 담김
console.log(values);      //=> {user[key]} 가 있지않다면 하나의 실행문인 user[key] 반환되어 밖으로 나간다
//>>['nugu', 90, 'nugunugu@nugu.com']