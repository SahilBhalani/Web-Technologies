//The Continue Statement
//The continue statement skips the current iteration in a loop
//The remaining code in the iteration is skipped and processing moves to the next iteration.

{
    let text = "";
    for (let i = 1; i < 10; i++){
        if( i === 3) {continue;}
        text += console.log("The number is " + i);
    }
}

//Continue to Labelname
{
    let text = "";

    loop1: for(let j = 1; j < 5; j++){
        loop2: for(let i = 1; i < 5; i++){
            if(i === 3) {continue loop2;}
            text += console.log(i);
        }
    }
}