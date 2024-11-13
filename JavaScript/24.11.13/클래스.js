// 클래스 : 객체를 만들기 위한 설계도를 의미
// 클래스를 사용한 OOP의 장점
// -코드의 재사용성,가동성, 유지 보수 용이, 상속과 확장성
// 자바스크립트에서 클래스의 활용은 프로튼엔드 개발에 있어서는 자주 사용되지않음.

class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.speed = 0;
  }

  getMake() {
    return this.make;
  }

  getModel() {
    return this.model;
  }

  getYear() {
    return this.year;
  }

  getColor() {
    return this.color;
  }

  getSpeed() {
    return this.speed;
  }

  accelerate(amount) {
    this.speed += amount;
    console.log(
      `The ${this.color} ${this.make} ${this.model} is now going ${this.speed} km/h.`
    );
  }

  break(amount) {
    this.speed = Math.max(0, this.speed - amount);
    console.log(
      `The ${this.color} ${this.make} ${this.model} is now going ${this.speed} km/h.`
    );
  }

  static getNumberOfWheels() {
    return 0;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, numDoors) {
    super(make, model, year, color);
    this.numDoors = numDoors;
  }

  getNumDoors() {
    return this.numDoors;
  }

  static getNumberOfWheels() {
    return 4;
  }
}

class Truck extends Vehicle {
  constructor(make, model, year, color, towingCapacity) {
    super(make, model, year, color);
    this.towingCapacity = towingCapacity;
  }

  getTowingCapacity() {
    return this.towingCapacity;
  }

  static getNumberOfWheels() {
    return 6;
  }
}

const myCar = new Car("Hyundai", "Sonata", 2021, "silver", 4);
console.log(myCar.getMake()); // 출력 결과: "Hyundai"
console.log(myCar.getModel()); // 출력 결과: "Sonata"
console.log(myCar.getYear()); // 출력 결과: 2021
console.log(myCar.getColor()); // 출력 결과: "silver"
console.log(myCar.getSpeed()); // 출력 결과: 0
console.log(myCar.getNumDoors()); // 출력 결과: 4
myCar.accelerate(30); // 출력 결과: "The silver Hyundai Sonata is now going 30 km/h."
myCar.break(10); // 출력 결과: "The silver Hyundai Sonata is now going 20 km/h."
console.log(Car.getNumberOfWheels()); // 출력 결과: 4

const myTruck = new Truck("Kia", "Sorento", 2022, "red", 10000);
console.log(myTruck.getMake()); // 출력 결과: "Kia"
console.log(myTruck.getModel()); // 출력 결과: "Sorento"
console.log(myTruck.getYear()); // 출력 결과: 2022
console.log(myTruck.getColor()); // 출력 결과: "red"
console.log(myTruck.getSpeed()); // 출력 결과: 0
console.log(myTruck.getTowingCapacity()); // 출력 결과: 10000
myTruck.accelerate(20); // 출력 결과: "The red Kia Sorento is now going 20 km/h."
myTruck.break(5); // 출력 결과: "The red Kia Sorento is now going 15 km/h."
console.log(Truck.getNumberOfWheels()); // 출력 결과: 6
