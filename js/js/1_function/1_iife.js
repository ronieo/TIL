//즉시 실행함수
//IIFE, Immediately-Invoked Function Expresstion : 즉시 실행하는 함수표현

const a = 7;

function double() {
  console.log('기존 함수 실행 방법: ', a * 2);
}
double(); 
// 이런식으로 한번만 만들어서 동작이 끝나버리게 되는 경우, 즉시 실행하게 만드는 방법은 아래와 같다

// 익명의 함수 생성 :  1. 소괄호 두개 사용 () ()
(function () {
  console.log('익명함수생성 ()(): ', a * 2)
})();

// 익명의 함수 생성 :  2. 소괄호 안에 소괄호를 넣어 사용 ( ()) : 더 권장함
(function () {
  console.log('익명함수생성 ( ()): ',a * 2)
}());