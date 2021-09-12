function callbackFunction(name) {
  console.log("Hello " + name);
}

function outerFunction(callback) {
  let name = "sg";
  callback(name);
}

outerFunction(callbackFunction);
