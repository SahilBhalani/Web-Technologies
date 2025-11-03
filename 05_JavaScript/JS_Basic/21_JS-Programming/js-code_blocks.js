//* Curly Braces
/**
 * A code block or block statement is a group of statements enclosed within curly braces { }.
 * Code blocks are important for controlling the flow of execution and defining variable scope within a JavaScript program.
 */

//* Code Block Statements
//Code blocks allows for multiple statements to be treated as single unit.
//The body of a Javascript function is always enclosed within a code block:
{
    function myFunction(){
        //This is a code block
    }

    //Code Blocks are essential for If statements
    if(condition){
        //This is a code block
    } else {
        // this is a code block
    }

    //Code blocks are essential for loop statements:
    for (let i = 0; i < 5; i++) {
        //This is a code block
        
    }
}

//* Defining Scope
//Variables declared with let and const inside a code block are "block-scoped" meaning they are only accesible within that specific block.
//This helps prevent unintended variable overwrites and promotes better code organization:
{
    {
        let x = 10;
        // x is accesible here
    }
    //x is not accesible here
}

//* Standalone Blocks
//code blocks can also exist independently without being attached to an if statement, a function or a loop
//This can be used to create a scope for let and const variables.
{
    let x = 10;
    let y = 100;
    let areal = x * y;
}

//* Encapsulation
/**
 * Variables inside the block are only available in the block
 * This prevents "Polluting" the global scope, keeps the code clean, and reduces the risk of name collisions.
 */

//* Temporary use
//if you need variables for a calculation, a block lets you declare them, use them, and discard them.

//* Organized Code
//You cna group related variables and statements in their own scope to avoid accidental name conflict without forcing them into a function or an object.
// This improves readabiltiy and avoids accidental name conflictre-use of variable names outside the block.
