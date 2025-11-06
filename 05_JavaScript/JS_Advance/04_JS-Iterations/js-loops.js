//* JavaScript Loops

//* The for Loop
//The for loop is used when the number of iterations is known.
//It consists of an initialization (exp1), a condition (exp2), and an increment expression (exp3).
{
   // for(exp1; exp2 ; exp3){
        //code block to be executed
    //}

    //exp1 is executed one time before the execution of the code block.
    //exp2 defines the condition for executing the code block
    //exp3 is executed every time a code block has been exectuted

    let text = ""
    for(let i = 0; i < 5; i++){
        text += "The Number is " + i + "\n";
    }
    console.log(text);

}

//* The while loop
//The while loop executes a block of code as long as a specified condition evaluates to true.
{
    //while(condition){
        //code block to be executed
    //}

    //In the following example. the code in the loop will run, over and over again, as long as a variable (i) is less than 10:

    let text = "";
    let i = 0;
    while ( i < 10){
        text += "The number is " + i + "\n";
        i++;
    }
    console.log(text);

    //? NOTE: If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.
}

//* The do...while loop
//The do...while loop is similar to the while loop, but gaurantees that the code block will be executed at least once, before the condition is checked
{
    /**
     * do {
     *  / code block to be executed
     * }
     * while(condition);
     */

    //The example below uses a do...while loop. The loop will always be executed at least once, even if the condition is false, because condition is false, because the code block is executed before the condition is tested:

    let text = "";
    let i = 0;
    do {
        text += "The number is " + i + "\n";
        i++;
    } while (i < 8);

    console.log(text);

    //Do not forget to increase the variable used in the condition, otherwise the loop will never end!
}

//* The for...in Loop
//The for...in loop iterates over the enumerable properties of an object.
//It is typically used for iterating over object keys.
{
    /**
     * for(keys in object){
     *   /// Code block to be executed
     * }
     */

    //A JavaScript for...in statement loops through the properties of a person object:
    const person = {fname: "John", lname:"Doe", age:25};

    let text = "";
    for(let x in person) {
        text += person[x] + " ";
    }
    console.log(text);
}

//* The for...of Loop
//The for...of loop iterates over the values of iterable object such as arrays, strings, Maps, Sets and NodeLists
{
    /**
     * Syntax:
     * 
     * for(variable of iterable) {
     * /// Code Block to be executed
     * }
     * 
     * ~ variables
     * for every iteration the value of the next property is assigned to the variable. Variable can be decalared with const, let or var.
     * 
     * ~ iterable
     * An object that has iterable properties
     */
}

//* Other Methods
//Array methods like forEach(), map(), filter() and reduce() provide alternative ways to iterate and manipulate array elements, often offering a more functional and concise approach compared to traditional loops for array-specific operations.
