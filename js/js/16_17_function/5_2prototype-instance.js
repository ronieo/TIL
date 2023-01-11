function user(first, last) {
  this.firstName = first;
  this.lastName = last;
}

const roroo = new user('roro', 'eo');
const amyy = new user('amy', 'clack');
const neoo = new user('neo', 'smith');
// new 키워드를 통해 생성자 함수를 사용해 앞서 선언한
// 변수를 통해 consol.log에 출력할 수 있게 되는데
// 여기서 이 변수를 '인스턴스'라고 부른다

console.log(roro, amy, neo);


//========================================================

function user(first, last) {
  this.firstName = first;
  this.lastName = last;
}

user.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}
// 같은 로직이기 때문에 한번만 만들어지므로 메모리를 효율적으로 활용할 수 있다.
// 한번만 만들어진다는 말은 참조된다 라는 말이라고도 할 수 있다.

const roro00 = new user('roro', 'eo');
const amy00 = new user('amy', 'clack');
const neo00 = new user('neo', 'smith');

console.log(roro.getFullName(), amy, neo);


//========================================================

function User(first, last) {
  this.firstName = first;
  this.lastName = last;
} // 생성자 함수이름은 파스칼케이스로 선언해주는게 좋다

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}
// 같은 로직이기 때문에 한번만 만들어지므로 메모리를 효율적으로 활용할 수 있다.
// 한번만 만들어진다는 말은 참조된다 라는 말이라고도 할 수 있다.
// .prototype엔 여러가지 메소스들이 들어가 있다.

const roro = new User('roro', 'eo');
const amy = new User('amy', 'clack');
const neo = new User('neo', 'smith');

console.log(roro.getFullName(), amy, neo);