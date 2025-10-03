// Resolves with value 3
Promise.resolve(3)
  .then(value => console.log("Resolved with:", value));

// Rejects with "Boo!"
Promise.reject("Boo!")
  .catch(error => console.log("Rejected with:", error));
