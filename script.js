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

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}
const aleksa = new PersonCl('Aleksa', 1995);

console.log(aleksa);
aleksa.calcAge();
console.log(aleksa.__proto === PersonCl.prototype);
