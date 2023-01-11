//타이머함수
// setTimeout(함수, 시간):  일정시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout함수 종료
// clearInterval(): 설정된 Interval함수 종료

// setTimeout
setTimeout(function() {
  console.log('야아아아아호 나왓따');
}, 2000); //2초가 지나면 콘솔로그 내용이 콘솔에 출력되는 함수를 setTimeout으로 감쌈

setTimeout(() => { console.log('야아아아아호 나왓따 =>')}, 2000); //위와같은 함수이지만 화살표방법으로 


// clearTimeout()
const timer = setTimeout(() => { 
  console.log('야아아아아호 나왓따 =>')
}, 3000); // 3초 후에 출력되도록 만든 함수

const h1El = document.querySelector('h1');
h1El.addEventListener('click',() => { //3초안에 h1태그를 클릭해버리면 콘솔에 아무것도 출력되지않음
  clearTimeout(timer); // time out을 초기화 해라
});


//======================================================================


// setInterval
const timerInverval = setInterval(() => { 
  console.log('야아아아아호 나왓따 =>')
}, 3000); // 3초 마다 한번씩 콘솔에 찍히도록 만든 함수


// clearInterval()
const h1ElInverval = document.querySelector('h1');
h1El.addEventListener('click',() => { //3초안에 h1태그를 클릭해버리면 3초마다 찍히던게 멈춤
  clearInterval(timer);
});