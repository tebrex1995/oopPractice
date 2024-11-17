'use strict';

// const Person = function (firstName, birthYear) {
//   //Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   //Never do this
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };
// const aleksa = new Person('Aleksa', 1995);
// console.log(aleksa);
// //1. New {} is created
// //2. function is called, this = {}
// //3. {} linked to prototype
// //4. function automaticly return {}
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda);
// console.log(jack);
// console.log(aleksa instanceof Person);
// // Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// aleksa.calcAge();
// console.log(aleksa.__proto__);
// console.log(aleksa.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(aleksa));
// console.log(Person.prototype.isPrototypeOf(Person));
// console.log(aleksa.__proto__.__proto__);
// console.dir(Person.prototype.constructor);
// const arr = [3, 4, 5, 6, 7, 8, 8, 9, 3, 3];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// console.log(arr.unique());
// ///////////////////////////////////////////////////
// ///TASK 1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// Car.prototype.accelerate = function () {
//   const newSpeed = this.speed + 10;
//   console.log(`${this.make} going at ${newSpeed} km/h`);
// Car.prototype.brake = function () {
//   const newSpeed = this.speed - 5;
// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
// bmw.accelerate();
// bmw.brake();
// mercedes.accelerate();
// mercedes.brake();
/////
// //Class expression
// const PersonCl = class {};
///Class Declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.fullName = firstName;
//     this.birthYear = birthYear;
//   }
//   //Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   get age() {
//     return 2037 - this.birthYear;
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   get fullName() {
//     return this._fullName;
//   //Static method
//   static hey() {
// }
// const aleksa = new PersonCl('Aleksa Tvrdi', 1995);
// console.log(aleksa.__proto === PersonCl.prototype);
// console.log(aleksa.age);
// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };
// console.log(aleksa.fullName);
// aleksa.greet();
// // 1. Classes are NOT hoisted (cannot be used before declared in the code)
// // 2. Classes are first-class citizens ( we can pass them in functions and return them in functions)
// // 3. Classes are executed in strict mode
// //////
// ///Setters and getters (functions that get and set value)
// const account = {
//   owner: 'aleksa',
//   movements: [200, 500, 120, 300],
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
// console.log(account.latest);
// account.latest = 100;
// console.log(account.movements);
// const PersonProto = {
// const steven = Object.create(PersonProto);
// console.log(steven);
//CHALLENGE 2
///TASK 1
//   Car.prototype.accelerate = function () {
//     const newSpeed = this.speed + 10;
//   };
//   Car.prototype.brake = function () {
//     const newSpeed = this.speed - 5;
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   accelerate() {
//     console.log(`${this.make} going at ${this.speed + 10} km/h`);
//   brake() {
//     console.log(`${this.make} going at ${this.speed - 5} km/h`);
//   get speedUS() {
//     return this.speed / 1.6;
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
// console.log(bmw.speedUS);
// bmw.speedUS = 50;
// console.log(bmw);
//   Person.prototype.calcAge = function () {
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// ///CHALENGE NUMBER 3
//     console.log(`${this.make} going at ${newSpeed} km/h`);
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} is going ${this.speed}km/h, with a charge of ${this.charge}`
//   );
// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// tesla.accelerate();
// class Student extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     //Needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
// const aleksa = new Student('Aleksa Tvrdisic', 2012, 'Security');
// aleksa.introduce();
//   init(firstName, birthYear) {
//     this.firstName = firstName;
// const aleksa = Object.create(PersonProto);
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
// StudentProto.introduce = function () {
// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'IT');
// jay.introduce();
// jay.calcAge();

//1) Public fields
//2) Private fields
//3) Public methods
//4) Private methods
// 5) There is alse the static version

// class Account {
//   // 1) Public fields (instances)
//   locale = navigator.language;

//   // 2) Private fields
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;

//     //Protected property
//     this.#pin = pin;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }
//   // 3) Public methods
//   //Public interface
//   getMovements() {
//     return this.#movements;
//   }
//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     } else console.log(`Loan not approved`);
//     return this;
//   }

//   // 4) Private methods
//   #approveLoan(val) {
//     return true;
//   }
// }
// const acc1 = new Account('Aleksa', 'rsd', 1111);

// // acc1.deposit(250);
// // acc1.withdraw(140);
// // acc1.requestLoan(1000);

// // console.log(acc1.getMovements());
// // console.log(acc1);

// //Chaining

// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

// console.log(acc1.getMovements());

////CHALENGE NUMBER 4
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} is going ${this.speed}km/h, with a charge of ${this.charge}`
//   );
// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// tesla.accelerate();

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
    return this;
  }
}

class EvCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is going ${this.speed}km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EvCl('Rivian', 120, 23);
console.log(rivian);

rivian
  .chargeBattery(90)
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .brake()
  .brake()
  .brake()
  .brake()
  .brake()
  .brake()
  .brake()
  .brake()
  .brake()
  .brake()
  .brake()
  .brake()
  .brake();
