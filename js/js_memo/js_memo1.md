# JS 숙달을 위한 메모: Array(배열)편

배열(Array)은 생성자 방식으로 만드는것이 기본이나, 불편하다는 단점이 있다.
그래서 조금 더 쉽게 작성하기위해 []대괄호작성하는 리터럴방식으로 대체로 사용한다.

배열[] <=이렇게 표기하는 방법을 대괄호 표기법이라고함
여기서 내가 원하는 데이터의 아이템을 꺼내보기위해 해당번호를 적는행위를 '인덱싱'이라고한다.
그리고 각데이터에 정해진 번호들을 인덱스라고한다.

ex)
const obst = ['Apfel', 'Banane', 'Kirsch', 'Durian'];
console.log(obst[2]); //result: Kirsch
console.log(obst.length); // result: 4
console.log(obst[obst.length-1]); // result: Durian
같은 방법 console.log(obst.at(-1)); //.at() :메소드 뒤에서 첫번째 것
가령 가변하는 배열의 가장 마지막 데이터아이템을 꺼내고 싶을 때

