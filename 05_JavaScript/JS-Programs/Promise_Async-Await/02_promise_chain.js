//* Promise Chain Example:

function performTask(taskName, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${taskName} Completed.`)
        }, delay);
    });
}

//Chain of Asynchronous tasks
performTask("Task1", 1000)
.then((result1) => {
    console.log(result1);
    return performTask("Task2", 2000)
})
.then((result2) => {
    console.log(result2);
    return performTask("Task3", 1500);
})
.then((result3) => {
    console.log(result3);
    console.log("All Tasks Completed");
})