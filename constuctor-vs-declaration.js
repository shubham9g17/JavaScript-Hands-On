var a = 100;
function createFunction() {
  var a = 200;
  return new Function(`return a;`);
}
console.log(createFunction()());

// var a = 100;
// function createFunction() {
//   var a = 200;
//   return function func() {
//     return a;
//   };
// }
// console.log(createFunction()());
