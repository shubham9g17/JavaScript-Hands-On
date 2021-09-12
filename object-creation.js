var object1 = new Object();

var object2 = Object.create(null);

var object3 = {};

function Person(name) {
  this.name = name;
  this.age = 21;
}
var object4 = new Person("Sudheer");

function Person2() {}
Person2.prototype.name = "Sudheer";
var object5 = new Person2();

class Person3 {
  constructor(name) {
    this.name = name;
  }
}
var object6 = new Person3("Sudheer");

var object7 = new (function () {
  this.name = "Sudheer";
})();

console.log(object2);
