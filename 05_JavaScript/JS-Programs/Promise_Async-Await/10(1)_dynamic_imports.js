//* Async / Await with Dynamic Imports:
export async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched successfull!')
        }, 1000);
    })
}