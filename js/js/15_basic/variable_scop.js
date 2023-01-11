// 변수 유효범위(Variable Scop)
// var, let, const
//의도하지않는 변수 범위내에서 동작할 확률이 높고, 이게 개발자가 눈치채지 못할 수있기때문에 메모리 누수로 이어진다.
// 이처럼 undefined또는 Error반응을 하는 let과 const로 변수를 선언해 줘야한다.


function scope(){
  if(true) {
    console.log(a);
    const a = 123;
  }
}

scope();