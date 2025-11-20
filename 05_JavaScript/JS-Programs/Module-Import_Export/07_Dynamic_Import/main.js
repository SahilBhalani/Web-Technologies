//* Async function to dynamically import and use the module
async function loadAndMultiply(a, b) {
    const mathModule = await import('./mathOperations.js');

    console.log(mathModule.multiply(a,b));
}

loadAndMultiply(4,5);