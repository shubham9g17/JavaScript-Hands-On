const sum = () => {
  var total = 0;
  for (var i = 0, len = arguments.length; i < len; ++i) {
    total += arguments[i];
  }
  return total;
};

console.log(sum(1, 2, 3));
