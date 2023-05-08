// Class work

//#region 1. Create a JavaScript function called add that takes a number as a parameter and returns a closure function. The closure function should add the parameter to a running total and return the updated total.

const add = function (number) {
  return function () {
    return (number += number);
  };
};

const initialize = add(5);

// console.log(initialize());
// console.log(initialize());
// console.log(initialize());

const add2 = function (num) {
  let total = 0;

  return function () {
    return (total += num);
  };
};

const initialize1 = add2(2);

// console.log(initialize1());
// console.log(initialize1());
// console.log(initialize1());

//#endregion

//------------------------------------------------

//#region 2. Create a JavaScript constructor function called Rectangle that takes width and height as parameters. Add a method to the prototype called getArea that returns the area of the rectangle.

const Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
};

Rectangle.prototype.getArea = function () {
  return this.height * this.width;
};

const area = new Rectangle(2, 5);

// console.log(area.getArea());

//#endregion

//------------------------------------------------------

//#region  HOme work

//#region   1. Implement a JavaScript constructor function called Person that takes name and age as parameters. Add a method to the prototype called introduce that returns a string introducing the person with their name and age.

const Person = function (name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.introduce = function () {
  return `Hello, My name is ${this.name}. I'm ${this.age} years old`;
};

const farid = new Person("Farid", 22);

// console.log(farid.introduce());

//#endregion

//---------------------------------------------

//#region 2. Create a JavaScript constructor function called Animal that has a property name. Add a method to the prototype called eat that logs a message saying the animal is eating.

const Animal = function (name) {
  this.name = name;
};

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating`);
};

const cat = new Animal("Cat");

// cat.eat();

//#endregion

//-------------------------------------------------------

//#region Write the array prototype called last. This prototype return last element of array. If no elements in array return -1. Don't use pop() method.

Array.prototype.last = function () {
  return this[this.length - 1];
};

const arr = [1, 2, 4];

// console.log(arr.last());

//#endregion

//----------------------------------------------------------

//#endregion
