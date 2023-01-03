//ES6 Classes
const roro0 = {
  name: 'roro',
  normal: function() { //객체데이터 내부에서 일반함수를 사용할때 :fucntion키워트 생략가능
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
} 

const roro00 = {
  name: 'roro',
  normal () { 
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}

//========================================================================================

//생성자 함수를 class라는 키워드를 통해 갱신 해보기

// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// }

class User {
  constructor(first, last) { //constructor: 클래스에서 사용하는 내부함수. 마찬가지로 :function생략되어있다고 생각하면됨
    this.fistName = first;
    this.lastName = last;
  }
  getFullName() { //별도로 .prototype이란 속성을 사용하지않아도 .prototype메소드 사용가능함.
    return `${this.firstName} ${this.lastName}`;
  }
}

const roro = new User('rororo', 'lee');
const amy = new User('amy', 'kim');
const neo = new User('neo', 'park');

console.log(roro);
console.log(amy.getFullName());
console.log(neo.getFullName());