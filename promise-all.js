const Promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

const Promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

const Promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});

Promise.all([Promise1, Promise2, Promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(`Error in promises ${error}`));
