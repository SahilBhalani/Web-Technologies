//* Basic Use of Promise.allSettled()
{
    const promise1 = Promise.resolve("Resolved from Promise 1");
    const promise2 = Promise.reject("Error from Promise 2");
    const promise3 = Promise.resolve("Resolved from Promise 3");

    Promise.allSettled([promise1,promise2,promise3])
    .then((results) => {
        results.forEach((result) => {
            if(result.status === "fulfilled"){
                console.log("Fulfilled:", result.value);
            } else if(result.status === "rejected") {
                console.log("Rejected:", result.reason);
            }
        });
    });
}

//* Using Promise.allSettled() with Dynamic Promise Creation
{
const asyncTask = (taskName, time, shouldReject = false) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(shouldReject){
                reject(`${taskName} failed`);
            } else {
                resolve(`${taskName} succeeded`);
            }
        }, time);
    });
};

const tasks = [
    asyncTask("Task 1", 1000),
    asyncTask("Task 2", 2000, true),
    asyncTask("Task 3", 1500)
];

Promise.allSettled(tasks)
.then((results) => {
    console.log("All Tasks Completed");
    console.log(results);
})
}