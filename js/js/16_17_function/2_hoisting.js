//호이스팅(Hoisting)
//함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// const a = 7;

// const double = function () {
//   console.log(a * 2);
// }

// double();

//==========================
// const a = 7;

// double(); //Uncaught TypeError: double is not a function at parcelRequire.main.js
//           //아직 함수가 선언되지 않았는데(만들어지지 않았는데) 호출했기때문에 발생하는 에러

// const double = function () { // 함수표현을 사용했을 때는 호출상의 순서때문에 에러가 발생함
//   console.log(a * 2);
// }

const a = 7;

double();

function double () { // 함수 선언으로 바꿔주면, 호이스팅 현상이 발생함.
  console.log(a * 2);
}

//유용한 사례: 
// 실무에선 복잡한 코드내용이 많아 컴퓨터가 위에서 아래로 코드를 읽어내려갈때 많은 로직을 거쳐서 내려가야함
// 때문에 호이스팅을 이용해 함수 호출을 최상단에 두고 함수의 실질적인 내용은 하단에 두는 구조가 생기는 것.
// 무조건 권장 사항은 아니나 추후 코드를 해석할 때 혼동하지 않도록 개념을 익혀두기