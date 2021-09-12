async function logger() {
  let data = await fetch("https://reqres.in/api/users"); // pause until fetch returns
  console.log(data);
}
logger();
