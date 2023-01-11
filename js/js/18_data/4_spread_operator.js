// ### 전개연산자(Spread)

const obsts = ['Apfel', 'Banane', 'Kirsh', 'Mango'];
console.log(obsts); //>> ['Apfel', 'Banane', 'Kirsh']
console.log(...obsts); // >> Apfel Banane Kirsh: 문자데이터형식으로 출력

function toObject(x, y, ...z) { // z가 나머지의 모든 아이템들을 받아줌(rest operator)
  return {
    a : x,
    b : y,
    c : z
  }
}
console.log(toObject(...obsts));// >> {a: 'Apfel', b: 'Banane', c: 'Kirsh'}
console.log(toObject(obsts[0], obsts[1], obsts[2])); //이렇게 해야 전개연산자와 같은 결과가 나옴
// >> {a: 'Apfel', b: 'Banane', c: 'Kirsh'}

/// 화살표 함수로 바꿔보기(우선 key:value가 같은변수여야함 ex. a:a)
const totoObject = (a, b, ...c) => ({a, b, c});
//{a, b, c} 이렇게만 두면 단순 객체 즉 블럭의 의미만 갖고 있기때문에 return을 하려면 ()안에 넣어야 함수가 돌아감
console.log(totoObject(...obsts));