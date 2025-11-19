//* Dynamically import the module and use the async function
async function loadAndExecute() {
    const module = await import('./10(1)_dynamic_imports.js')

    const result = await module.fetchData();
    console.log(result);
}