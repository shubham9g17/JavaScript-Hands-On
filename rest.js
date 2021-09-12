function total(...args) {
  let sum = 0;
  for (let i of args) {
    sum += i;
  }
  return sum;
}
console.log(total(1, 2));
console.log(total(1, 2, 3));
console.log(total(1, 2, 3, 4));
console.log(total(1, 2, 3, 4, 5));
