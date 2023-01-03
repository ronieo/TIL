
//반복문for(let 시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul');

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li'); // input - submit

  li.textContent = `list-${i + 1}`; //이유는 초기값이 0이 아니라 0+1로 시작하기때문

  if ((i+1) % 2 === 0) { // i를 2로 나눴을 때 나머지가 0이면

    li.addEventListener('click', function () {
      console.log(li.textContent);
    })
  }

  ulEl.appendChild(li);
}