//* Handling Promise Rejection
const delayedRejection = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("An Error Occured!")
    }, 1000);
});

delayedRejection
.then((result) => {
    console.log("This Will not be logged:", result);
})
.catch((error) => {
    console.error("Caught an error: ", error);
});