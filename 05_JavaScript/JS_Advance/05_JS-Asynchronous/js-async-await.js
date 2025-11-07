//* JavaScript Async
/**
 * "async and await make promises easier to write"
 * async makes a function return a Promise
 * await makes a function wait for a Promise
 */

//* Async Syntax
//The keyword async before a function makes the function return a promise
{
    async function myFunction() {
        return "Hello";
    }

    //Is the same as:
    function myFunction2(){
        return Promise.resolve("Hello");
    }

    //Here is how to use the Promise:
    myFunction2().then(
        function(value){ /*Code if successful */ },
        function(error){ /*Code if some error */}
    );
}
{
    //Example
    function myDisplayer(some){
        console.log(some);
    }

    async function myFunction() {
        return "Helluuuuu";
    }
    myFunction().then(
        function(value){myDisplayer(value);},
        function(error){myDisplayer(error);}
    );

    //Or simpler, since you expect a normal value ( a normal response, not an error) , so you can opt out error object code line.
}


//* Await Syntax
//The await keyword can only be used inside an async function
//The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
//let value = await promise;
{
    //Learn how to use it:
    async function myDisplay() {
        let myPromise = new Promise(function(resolve,reject) {
            resolve("I Love You !!");
        });
        console.log(await myPromise);
    }
    myDisplay();
}

//The two argument(resolve and reject) are pre-defined by JavaScript.
//We will no create them, but call one of them when the executor function is ready
//Very often we will not need a reject function.
{
    //* Waiting for a Timeout
    
    async function myDisplay() {
        let myPromise = new Promise(function(resolve) {
            setTimeout(function() {resolve("I Envy You !!");}, 3000)
        });
        console.log(await myPromise);
    }
    myDisplay();
}
{
    //* Waiting for a File

    async function getFile() {
        let myPromise = new Promise(function(resolve){
            let req = new XMLHttpRequest();
            req.open('GET','async.html');
            req.onload = function(){
                if(req.status == 200) {
                    resolve(req.response);
                } else {
                    resolve("File not Found")
                }
            };
            req.send();
        });
        console.log(await myPromise);
    }
    getFile();
}
