//* Create a simple Promise

function simplePromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello! World");
        }, 2000)
    });
}

simplePromise().then((message) => {
    console.log(message);
})