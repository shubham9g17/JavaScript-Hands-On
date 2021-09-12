var namespaceOne = {
  func1: function () {
    console.log("This is a first definition");
  },
};
var namespaceTwo = {
  func1: function () {
    console.log("This is a second definition");
  },
};
namespaceOne.func1(); // This is a first definition
namespaceTwo.func1(); // This is a second definition
