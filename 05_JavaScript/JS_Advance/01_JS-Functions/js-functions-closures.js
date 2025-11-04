//* JavaScript Closures
/**
 * JavaScript variables can belong to:
 * The local scope or The global scope
 * Global variables can be made loca(private) with closures.
 * Closures makes it possible for a function to have "private" variables
 */

//* Local Variables
// A local variable is a "private" variable defined inside a function.
//A function can access all variables in the local scope.
{
    //a is a local variable defined inside the function
    function myFunction() {
        let a = 4;
        return a * a;
    }

    console.log(myFunction());
}

//* Global Variables
//A global variable is a "public" variable defined outside a function.
//A function can access all variables in the global scope
{
    //a is global variable defined outside the function
    let a = 5;
    function myFunction(){
        return a * a;
    }

    console.log(myFunction());

    //In a web page, global variables belong to the page.
    //Global variables can be used (or changed) by all scripts in the page.
    //A local variable can only be used inside a function where it is defined. it is private and hidden from other functions and other scripting code.
    //Global and local variables with the same name are differnt variables, modifying one, does not modify the other.
}

//? NOTE: 
// Undeclared variables (created without a keywords var,let,const) are always global even if they are created inside a function
{
    //The variable a is a global variable because it is undeclared:
    function myFunction(){
        a = 4;
    }
}

//* Variable Lifetime
//Global variables live until the page is discarded, like when you navigate to another page or close the window.
//Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.

//* A Counter Dilemma 
//Suppose you want to use a variable for counting something, and you want this counter to available to everyone(all functions.
//You could use a global variable and a function to increase the counter.

{
    //Initiate counter
    let counter = 0;

    //Function to increament counter
    function add(){
        counter += 1;
    }

    //call add() 3 times
    add();
    add();
    add();

    // The counter should now be 3
    console.log(counter);
}
//! Warning
//There is a problem with the solution above: Any code on the page can change the counter, without calling add().
//The counter should be local to the add() function, to prevent other code from changing it:
{
    //Initiate counter
    let counter = 0;

    //function to increament counter
    function add(){
        let counter = 0;
        counter += 1;
    }

    //call add() 3 times
    add();
    add();
    add();

    //The counter should now be 3. but it is 0
    console.log(counter);

    //It did not work because we display the global counter instead of the local counter
}
{
    //We can remove the global counter and access the local counter by letting the function return it:

    //Function to increament counter
    function add() {
        let counter = 0;
        counter += 1;
        return counter;
    }

    let x = 0;
    //call add() 3 times
    x = add();
    x = add();
    x = add();
    
    //The counter should now be 3. but it is 1
    console.log(x);

    //It didnt work because we reset the local counter every time we call the function.
}

//? Solution: A JavaScript inner function can solve this.
//* JavaScript Nested Functions
/**
 * All Functions have access to the global scope.
 * In face, in JavaScript, all functions have access to the scope "above" them
 * JavaScript supports nested functions. Nested functions have access to the scope "Above" them.
 */
{
    //The inner function plus() has access to the counter variable in the parent function:
    function add() {
        let counter = 0;
        function plus() {
            counter +=1;
        }
        plus();
        return counter;
    }

    console.log(add()); //Return 1 

    //This could have solved the counter dilemma, if we could reach the plus() function from the outside.
    //We also need to find a way to execute counter = 0 only once.

    //! We Need a closure.
}

//* JavaScript Closures
{
    function myCounter(){
        let counter = 0;
        return function() {
            counter++;
            return counter;
        };
    }

    const add = myCounter();
    add();
    add();
    console.log(add());

    //* Example Explained
    /**
     * The variable add is assigned to the return value of a function
     * The function only runs once. It sets the counter to zero(0), and returns a function expression.
     * This way add becomes a function. The "Wonderful" part is that it can access the counter in its parent scope
     * This is called a closure. It makes it possible for a function to have "private" variables.
     * The counter is protected by the scope of the myCounter function, and can only be changed using the add function.
     */
}

//* Conclusion
//A closure is a function that has access to the parent scope, after the parent function has closed.
//Closure has historically been used to:
// ~ Create private variables
// ~ Preserve state between function calls
// ~ simulate block-scoping before let and const existed
// ~ Implement certain design patterns like currying and memoization


