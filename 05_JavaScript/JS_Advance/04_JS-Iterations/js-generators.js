//* JavaScript Generators
/**
 * * Generator Functions
 * /// A Generator Function is defined using the function* syntax:
 * ~ function* myGenerator() {}
 * 
 * /// When called, A generator function returns a Generator Object, not a direct value:
 * ~ {value:1, done:false}
 */

//* Generator Objects
// A Generator Object is Returned by the generator function
//It confirms to  both the iterable and iterator protocols. meaning it can be iterated over using for...of loops.
{
    function* myStream() {
        //return {value:1 , done:false}
        yield 1;

        //return {value:2 , done:false}
        yield 2;

        //return (value:3 , done:true)
        return 3;
    }

        //Create a Generator
        let myGenerator = myStream();

        //Iterate over the Generator
        let text = ""
        for (let value of myGenerator) {
            text += value + "\n"
        }

        console.log(text);
}

//* The yield Keyword
//The yield keyword pauses execution and yield a value back to the caller
//The generator's state is preserved. and can be resumed from the point of the yield when next() is called.
//Generators maintain their internal state between yield calls allowing them to continue execution from where they left off
{
    
    function* myStream() {
        //return {value:1 , done:false}
        yield 1;

        //return {value:2 , done:false}
        yield 2;

        //return (value:3 , done:false)
        yield 3;
    }

        //Create a Generator
        let myGenerator = myStream();

        //Iterate over the Generator
        let text = ""
        for (let value of myGenerator) {
            text += value + "\n"
        }

        console.log(text);
}

//* Generator Object Methods
/**
 * A Generator Object confirms to the iterable and iterator protocols
 * It can be iterated over with for..of loops
 * It also has methods:
 * Method   Description
 * next()   Resumes the next execution of a generator function
 * return() Finishes this execution and returns a given value
 * throw()  Throws an exeption in this execution
 */

//* Custom Iterators
//Generators simplify the creation of custom iterators for complex data structures or sequences.
//They can efficienty generate values on demand, making them suitable for potentially infinite data streams.
//They can pause and resume execution, which can be useful for fine-grained control over program flow
//Before async/await ,generators were used with Promises to manage asynchronous operations in a more sequential-looking manner.

