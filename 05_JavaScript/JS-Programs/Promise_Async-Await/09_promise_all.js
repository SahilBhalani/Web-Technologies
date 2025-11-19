//* Promise.all with Mixed Operations:
{
    //* Using Named Funtion
    function syncTask(){
        return "Synchronous result";
    }

    function asyncTask(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Asynchronous result")
            }, 2000);
        });
    }

    Promise.all([syncTask(), asyncTask()])
    .then((results) => {
        console.log("Result:", results);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
}

//* Inline Functions
{
    Promise.all([
        "Inline synchronous result",
        new Promise((resolve) => {
            setTimeout(() => {
                resolve("Inline asynchronous result")
            }, 1500);
        }),
    ])
    .then((results) => {
        console.log("Results:", results);
    })
    .catch((error) => {
        console.log("Error:",error);
    }); 
}