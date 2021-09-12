class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
Person.staticAge = 30;
Person.prototype.prototypeAge = 40;

console.log(new Person("sg", 20));
