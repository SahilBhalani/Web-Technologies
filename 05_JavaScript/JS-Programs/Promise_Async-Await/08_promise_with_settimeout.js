// * Promise with setTimeout:
{
    //Using a Named Function
    function delay (milliseconds) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Resolved after ${milliseconds} milliseconds`);
            }, milliseconds);
        });
    }

    delay(2000).then((message) => console.log(message));
}

{
    //Using Arrow Function
    const delay = (milliseconds) => 
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Done Waiting ${milliseconds} ms`)
            }, milliseconds);
        });

    delay(3000).then((message) => console.log(message));
    
}