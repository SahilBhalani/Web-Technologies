//Shared module is used to decouple the circular dependency
export function sharedFunction(message) {
    console.log(`Shared function called ${message}`);
}