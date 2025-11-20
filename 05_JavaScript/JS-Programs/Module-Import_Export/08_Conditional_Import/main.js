//Function to conditionally import a module and use its functions
async function calculate(a,b,operation) {
    if(operation === 'add'){
        const { add } = await import('./mathOperation.js');
        console.log(add(a,b));
    } else if (operation === 'multiply') {
        const { multiply } = await import('./mathOperation.js')
        console.log(multiply(a, b));
    } else {
        console.log("Invalid Operation");
    }
}

//calling function
calculate(2,3, 'add');
calculate(2,3, 'multiply');
calculate(2,3);