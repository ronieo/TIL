//상속(확장)

class Vehicle { //생성자함수 || 클래스
  constructor(name, wheel) { //constructor함수를 통해 name, wheel라는 parameter(매개변수)를 받아오고 있음
    this.name = name;
    this.wheel = wheel;
  }
}
//instance생성
const myVehicle = new Vehicle('운송수단', 2); // new키워드를 통해 myVehicle이라는 생성자 함수 실행 || 생성
console.log(myVehicle);


class Bicycle extends Vehicle { //Vehicle란 내용을 상속받았다
  constructor(name, wheel) {
    super(name, wheel); // super가 있는 자리에서 상속받은 Vehicle함수가 실행된다.(super가 곧 Vehicle)
    //Vehicle의 constructor에 들어있는 name, wheel로 넘겨져서 다시 myBicycle생성자 함수에서 동작하게 되는것.
  }
}
const myBicycle = new Bicycle('빈폴', 3);
const twoWheelBicycle = new Bicycle('킥보드', 2);
console.log(myBicycle);
console.log(twoWheelBicycle);


class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel); //기존의 내용을 가지고온 다음
    this.license = license; //새로운 내용이 추가
  }
}
const myCar= new Car('벤틀리', 4, true);
const sisCar= new Car('BMW', 4, false);
console.log(myCar);
console.log(sisCar);