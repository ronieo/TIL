//*****콜백(Callback): 함수의 인수로 사용되는 함수
// + 코드를 작성히, 특정 위치에서 실행을 보장해주는 것으로 콜백을 활용할 수 있다.


// setTimeout(함수, 시간) => 여기서 함수가 콜백인 것.

function timeout() {
  setTimeout(() => {
    console.log('dkdkdkdkkddk');
  }, 3000);
}
timeout();
console.log('fertig!');
// 결과:
// 1. fertig! => 2.dkdkdkdkdkdk출력

function timeout_cb(callback) {
  setTimeout(() => {
    console.log('dkdkdkdkkddk_cb');
    callback(); // 내가 실행을 보장하고싶은 곳에서 함수가 출력되도록 한다.
  }, 3000);
};

timeout_cb(() => {
  console.log('fertig!_cb');
}); // timeout호출할때, 익명의 함수를 사용했고, 이게 callback이라는 매개변수에 들어간다