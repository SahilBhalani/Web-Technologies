//* Sequential Async Operations

function asyncOperations1() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log('Asynchronous Operations 1');
            resolve();
        }, 1000);
    });
}
function asyncOperations2() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log('Asynchronous Operations 2');
            resolve();
        }, 2000);
    });
}
function asyncOperations3() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log('Asynchronous Operations 3');
            resolve();
        }, 1500);
    });
}

async function performOperations() {
    try {
        await asyncOperations1();
        await asyncOperations2();
        await asyncOperations3();
        console.log('All Operations Completed');
    } catch (error) {
        console.log('Error:', error.message);
    }
}

performOperations();