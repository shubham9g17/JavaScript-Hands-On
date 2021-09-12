var Promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
var Promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});
Promise.race([Promise1, Promise2]).then((result) => console.log(result));
