let arr = ["a", "b", "c"];

arr.newProp = "newVlue";
console.log(arr);
// key are the property keys
for (let key in arr) {
  console.log(key, "k");
}

// value are the property values
for (let value of arr) {
  console.log(value, "v");
}
