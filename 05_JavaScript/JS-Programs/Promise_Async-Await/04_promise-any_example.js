//* Promise.any() Example:
{
  const promise1 = new Promise((resolve, reject) =>
    setTimeout(reject, 1000, "Error in Promise1")
  );

  const promise2 = new Promise((resolve) =>
    setTimeout(resolve, 1500, "Success from Promise 2 ")
  );

  const promise3 = new Promise((resolve) =>
    setTimeout(resolve, 2000, "Success from Promise 3")
  );

  Promise.any([promise1, promise2, promise3])
    .then((result) => {
      console.log("First successful result:", result);
    })
    .catch((error) => {
      console.error("All promises rejected:", error);
    });
}

//* Using Promise.any() with Dynamic Promise Creation
{
  const asyncTask = (taskName, time, shouldReject = false) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject(`${taskName} Failed!`);
        } else {
          resolve(`${taskName} Completed!`);
        }
      }, time);
    });
  };

  const tasks = [
    asyncTask("Task 1", 1000, true),
    asyncTask("Task 2", 500),
    asyncTask("Task 3", 1500),
  ];

  Promise.any(tasks)
    .then((result) => {
      console.log("First successful result:", result);
    })
    .catch((error) => {
      console.error("All Tasks failed:", error);
    });
}
