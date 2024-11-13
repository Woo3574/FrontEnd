// 클래스 : 객체를 만들기 위한 설계도를 의미
// 클래스를 사용한 OOP의 장점
// -코드의 재사용성,가동성, 유지 보수 용이, 상속과 확장성
// 자바스크립트에서 클래스의 활용은 프로튼엔드 개발에 있어서는 자주 사용되지않음.

class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.speed = 0;
  }
}
