// this
// 일반(Normal)함수는 호출 위치에 따라 this를 정의
// 화살표(Arrow)함수는 자신이 선언된 함수 범위에서 this정의

const roro0 = {
  name: 'roro',
  normal: function() {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
//.normal() 괄호가 달려있으면 함수를 호출한다. 라고 표현
roro0.normal();  
// consol result: roro - roro0객체안에 normal함수가 속해 있기 때문에, 인지 가능 

roro0.arrow(); 
// consol result: undefined -  호출 위치와 전혀 상관 없이. 
//                             자신이 선언된 함수 범위를 파악할 수 없어
//                             arrow함수가 가르키는 this가 객체 roro0인지 알 수 없음

const amy0 = {
  name: 'amy',
  normal: roro0.normal, // roro0에 들어있는 mormal함수가 '할당'되는 것
  arrow: roro0.arrow // roro0에 들어있는 arrow함수가 '할당'되는 것
}
amy0.normal();
// consol result: amy - normal 함수에서의 this는 amy0을 가리키기 때문에, 그 객체의 이름인 amy가 출력

amy0.arrow();
// consol result: undefined - 선언된 그 위치에서 정의 되기때문에 호출위치와 전혀 상관이 없음.

//========================================================================================

//prototype를 사용하는 생성자함수에서 this가 어떻게 정의 되어야하는지

function User(name) {
  this.name = name
} //함수이름 파스칼형태: 생성자함수

//유저함수를 이용해 프로토탙입을 사용하여 .normal이라는 메소드를 사용할건데, 이는 this.name을 출력한다.
User.prototype.normal = function () {
  console.log(this.name);
}

User.prototype.arrow = () => {
  console.log(this.name);
}

//new라는 키워드로 user라는 생성자 함수에 'rororo'라는 인수를 넣어서 roro라는 인스턴스(변수)로 만들어 준다.
const roro = new User('rororo');

roro.normal(); //roro는 곧 객체데이터이고, .normal()함수를 호출 할 수 있다.
// consol result: rororo -  호출위치에 연결되어있는 roro인스턴스에 연결되면서 
//                          'rororo'를 name이라는 매개변수에 받아서 출력됨

roro.arrow();
// consol result: undefined - 화살표함수가 만들어지는 영역이 없기때문에  undefined

//========================================================================================

// Arrow의 효과적인 활용

const timer = {
  name: 'nugu',
  timeout: function() {
    //setTimeout(함수, 시간); //여기서 함수는 콜백함수, 시간은 ms단위
    setTimeout(function () {
      console.log(this.name); //일반함수로 만들어져있고, 여기서 this는 setTimeout내부로직으로 콜백이 들어감
    }, 2000);
  }
}
timer.timeout();

const timerArrow = {
  name: 'nugu',
  timeout: function() {
    setTimeout(() => {
      console.log(this.name); 
    }, 2000);
  }
}
timerArrow.timeout();
// 콘솔 결과: nugu - 자신이 선언된 함수 범위(여기서는 timerArrow)때문에 name속성을 받아서 콜백할 수 있음