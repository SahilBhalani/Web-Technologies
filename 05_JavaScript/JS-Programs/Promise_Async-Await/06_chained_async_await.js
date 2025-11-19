//* Using async/await with Separate Functions

const asyncTask = (taskName, time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${taskName} completed`);
            resolve(taskName);
        }, time);
    });
};

const executeTasks = async () => {
    const result1 = await asyncTask("Task 1", 1000);
    console.log(result1);
    const result2 = await asyncTask("Task 2", 2000);
    console.log(result2);
    const result3 = await asyncTask("Task 3", 1500);
    console.log(result3);

    console.log("All tasks completed sequentially");
};

executeTasks();