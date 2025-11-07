//* JavaScript Promises
/**
 * "Producing Code" is a code that can take some time.
 * "Consuming Code" is code that must wait for the result
 * A promise is an Object that links Producing code and Consuming code
 */

//* JavaScript Promise Object
//A Promise contains both the producing code and calls to the consuming code:
{
    let myPromise = new Promise(function(myResolve, myReject) {
        //"Producing Code" (May take some time)

        myResolve(); //When successful
        myReject(); // When error
    });

    //"Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
        function(value){ /* code if successful */},
        function(error){ /* code if some error */},
    );

    /**
     * When The producing coded obtains the result, it should call one of the two callbacks:
     * When         Call
     * Success      myResolve(result value)
     * Error        myReject(error object)
     */ 
}

//* Promise Object Properties
/**
 * A JavaScript Promise object can be:
    ~ Pending
    ~ Fulfilled
    ~ Rejected
 *
 * The Promise object supports two properties: state and result
 * While a Promise object is "pending" (working), the result is undefined
 * When a Promise object is "fulffilled", the result is value.
 * Whne a Promise object is "Rejected" , the result is an error object.
 *   
 * myPromise.state          myPromise.result
 * "pending"                undefined
 * "fulfilled"              a result value    
 * "rejected"               an error object
 * 
 * You cannot access the Promise properties state and result
 * You must use a Promise method to handle promises.
 */

//* Promise How to
{
    // myPromise.then(
    //     function(value) { /* code if successful */},
    //     function(error) { /* code if some error */}
    // );

    //Promise.then() takes two arguments, a callback for success and another for failure
    //Both are optional, so you can add a callback for success or failure only.
}
{
    function myDisplayer(some) {
        console.log(some);
    }

    let myPromise = new Promise(function(myResolve,myReject) {
        let x = 0;

        // The Producing code (this may take some time)
        if(x == 0){
            myResolve("OK");
        } else {
            myReject("Error");
        }
    });

    myPromise.then(
        function(value) {myDisplayer(value);},
        function(error) {myDisplayer(error);}
    )
}

//* JavaScript Promise Examples
//To Demonstrate the use of promises, we will use the callback from the previous chapter:
//~ Waiting fot a Timeout
//~ Waiting for a File

//* Waiting For a timeout
{
    setTimeout(function(){myFunction("I Love You !!!");},3000);

    function myFunction(value){
        console.log(value);
    }
}

//* Example Using Promise
{
    let myPromise = new Promise(function(myResolve,myReject){
        setTimeout(function(){ myResolve("I Hate You!!!");},3000)
    });

    myPromise.then(function(value){
        console.log(value);
    })
}

//* Waiting for a file
{
    //* Example using Callback
    function myDisplayer(some){
        console.log(some);
    }

    function getFile(myCallback){
        let req = new XMLHttpRequest();
        req.onload = function() {
            if(req.status == 200) {
                myCallback(this.responseText);
            } else {
                myCallback("Error: " + req.responseText.status);
            }
        } 
        req.open('GET','asynchronus.html');
        req.send();
    }
    getFile(myDisplayer);
}
{
    //* Example using Callback
    function myDisplayer(some) {
        console.log(some);
    }

    let myPromise = new Promise(function(myResolve,myReject){
        let req = new XMLHttpRequest();
        req.open('GET','asynchronous.html');
        req.onload = function(){
            if(req.status == 200) {
                myResolve(req.response);
            } else {
                myReject("File not Found");
            }
        };
        req.send();
    });

    myPromise.then(
        function(value){
            myDisplayer(value);
        },
        function(error){
            myDisplayer(error);
        }
    )
}

