//* JavaScript Dynamic Modules
/**
 * Dynamic Import was intoduced in ECMAScript 2020.
 * Dynamic Import is one of the most powerful features for modular and efficient code.
 * Dynamic import is a way to load JavaScript modules at runtime, rather than at the start of your program.
 */

//* Modern Software
/**
 * Modern software splits imports into separate chunks.
 * 
 * Modules are downloaded only when requested - this method has many names:
 * ~ Dynamic Import
 * ~ Code Splitting
 * ~ Lazy Loading
 * ~ Conditional Loading
 * 
 * Unlike Static Import(which must appear at the top of a file), Dynamic Import can be used anywhere - inside functions, conditionals, event handlers, etc.
 * 
 * Syntax
 * import("./module.js")
 * ~The argument must be be a string or expression that resolve to a path.
 * ~ You must run the import inside a module script(<script type="module">)
 * 
 * Type     Example                                 When Loaded
 * Static   import{add} from './math.js';           At Loaded Time   
 * Dynamic  const math = await import('./math.js'); When needed
 */

//* Improved Performance
//Modules can improve performance by allowing tools to implement "Code splitting". This means that a user's browser only need to load the JavaScript modules required for the specific features they are using at a given moment, rather than the entire application's code at once.

//While modules themselves are a language feature, when combined with bundlers like Webpack or Rollup, they can lead to performance improvements though optimizations like tree-shaking(eliminating unused code), code splitting, and minification.

//* How Dynamic Import Works
//Dynamic Modules use modern async/await:
{
    async function run() {
        const module = await import("./math.js");
        let result = module.add(2,3);
        console.log(result);
    }
    run();

    //? Example Explained
    // ~ The Script starts running
    // ~ It defines and calls run()
    // ~ Inside run(), It dynamically loads math.js
    // ~ Once loaded, it gets access to the exported function add()
    // ~ It calls add(2,3) and gets 5
    // ~ It displays the result
}
/**
 * STEP CODE                       EXPLAINED
 * 1    async function run()       Define a function that can use await
 * 2    await import("./math.js")  Load the module file only when needed
 * 3    module.add(2,3)            Use the exported function from the module
 * 4    run()                      Start the process    
 */

{
    //Step 1: Define a function that can use await
    async function run() {
        /**
         * This line defines an asynchronous function called run()
         * The async keyword means the function can use await inside it
         * The await keyword pauses the function until a Promise is resolved
         * In this case, the Promise is the import of the module.
         */

    //Step 2: Load the module file only when needed:
    const module = await import("./math.js");
    /**
     * import("./math.js") defines a dynamic import
     * The module math.js is loaded on demand
     * math.js returns a Promise that resolves to its exported content
     * The await keyword waits until the module is fully loaded
     * Once loaded, the variable module contains the data exported from math.js 
     */    

    //Step 3: Use the exported function from the module.
    let result = module.add(2,3);
    /**
     * Calls the exported function add() from the imported module
     * Passes in 2 and 3 as arguments
     * The function adds them and returns 5
     * The result is stored in result.
     */

    //Step 4. Start the process - Call the Function
    run();
    /**
     * When it runs:
     *  1. It loads the module math.js dynamically
     *  2. It waits for the module to finish loading
     *  3. It calls the add() function of the module
     *  4. It display the result
     */
    }
}
{
    //Another Example
    async function run(x) {
        const module = await import("./temperatures.js");
        let celcius  = module.toCelcius(x);
        console.log(celcius+" Celcius");
    }
    run(50);
}

//* Dynamic Import Key Features
// Lazy Loading - Load code only when it is needed
// performance Optimization - Reduce initial load size for faster page load
// Conditional Imports - Import different modules bases on conditions.

//* Conditional Loading
if(user.isAdmin) {
    const adminTools = await import("./admin-tools.js");
    adminTools.init();
}