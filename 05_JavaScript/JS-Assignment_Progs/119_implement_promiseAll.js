function syncTask() {
  return "Synchronous Result";
}

function asyncTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Asynchronous Result");
    }, 2000);
  });
}

Promise.all([syncTask(), asyncTask()])
  .then((results) => {
    console.log("Result: " + results);
  })
  .catch((error) => {
    console.log("Error: " + error);
  });
