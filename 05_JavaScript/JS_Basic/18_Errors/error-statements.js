//* The try Statement
/**
 * In Javascript, the try statement is used to handle error(also called exception) that may occur during code execution - without stopping the entire program
 * The try statement works together with catch
 * Sometimes it works with finally
 * And sometimes it works with throw.
 */

//* The try Block
//The try block contains the code that might throw an error
//If no error occurs, the catch block is skipped
{
    //Syntax
    try{
        // Code that may cause an error
    } catch (error) {
        //Code to handle the error
    }
}

//* The Catch Block
//The catch block executes only if an error occurs in the try block
//The error object provides details about what went wrong.
{
    //Syntax:
    try{
        //code that may cause error
    } catch (error) {
        //Code to handle the error
    }
}

//* The Finally Block(Optional)
//The finally block executes after the try and catch blocks, whether an error occured or not.
//It is commonly used for cleanup tasks (e.g, closing files, stopping loader, etc.)
{
    //Syntax.
    try {
        //Code that may cause an error
    } catch (error){
        //Code to handle the error
    } finally {
        // code that always runs, no matter what
    }
}

//* Throws Errors
//When an error occurs, JavaScript will normally stop and generate an error massage.
//The technical term for this is: Javascript will throw an exception ( throw an error)
//JavaScript will actually create an Error Object with two properties: name and message.

//* The throw Statement
//The throw statement allows you to create a custom error.
//Technically you can throw an exception (Throw an error).
//The exception can be a JavaScript String, a Number, a Boolean or an Object:
{
   //throw "Too Big"; // throw a text
   //throw 500; //throw a number

   //if you use throw together with try with catch, you can control program flow and generate custom error messages.
}

// TODO: Input Validation Example
//The example examines input. if the value is wrong, an exception (err) is thrown.
//The exception(err) is caught by the catch statement and a custom error message is displayed:
{
    function myFunction(){
        const message = document.getElementById('p01');
        message.innerHTML = "";
        let x = document.getElementById('demo').value;
        try{
            if(x.trim() == "") throw "empty";
            if(isNaN(x)) throw "not a number";
            x = Number(x);
            if (x < 5) throw "too low";
            if(x > 10) throw "too high"
        }
        catch (err){
            message.innerHTML = "Input is " + err;
        }
    }
}

//* HTML Validation
//The code above is just an example
//Modern browsers will often use a combination of JavaScript and built-in HTML validation using predefined validation rules defined in HTML attributes:
// <input id="demo" type="number" min="5" max="10" step="1">

//* Finally Example
//The Finally Statement lets you execute code, after try and catch, regardless of the result
{
    try{
        // Block of code to try
    }
    catch(err){
        // Block of code to handle errors
    }
    finally {
        //Block of code to be executed regardless of the try/catch result
    }
}
//Example
{
    function myFunction2(){
        const message = document.getElementById('p02');
        message.innerHTML = "";
        let x = document.getElementById('demo').value;

        try{
            if(x.trim() == "") throw "is empty";
            if(isNaN(x)) throw "is not a number";
            x = Number(x);
            if(x > 10) throw "is too high";
            if(x < 5) throw "is too low";
        }
        catch(err){
            message.innerHTML = "Input " + err;
        }
        finally {
            document.getElementById('demo').value;
        }
    }
}

