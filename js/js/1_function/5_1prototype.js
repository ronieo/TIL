//생성자 함수
function user(first, last) {
  this.firstName = first;
  this.lastName = last;
}

const roro = new user('roro', 'eo');

console.log(roro);

//메모리의 효율적인 관리를 위해 클래스를 만들어야

const roro0 = {
  firstName: 'roro',
  lastName: 'eo',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}` //데이터가 '보간'되어있음
  }
} //여기서 this는 선언된 변수명 roro이다.
console.log(roro);

const amy = {
  firstName: 'amy',
  lastName: 'clack',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(amy.getFullName());

const neo = {
  firstName: 'neo',
  lastName: 'smith',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}` 
  }
}
console.log(neo.getFullName());