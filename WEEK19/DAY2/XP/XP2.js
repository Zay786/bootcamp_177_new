const successPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }, 4000); // 4 seconds
});

successPromise.then(result => console.log(result));
