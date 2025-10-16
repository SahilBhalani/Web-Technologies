// The While Loop
// The while loop loops through a block of code as long as a specified condition is true.
{
    let text = "";
    let i = 0;
    while (i < 10){
        text += console.log("The number is " + i);
        i++;
    }
}

//============================================================

//The Do While Loop
//The do while loop is a varient of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

// NOTE: The do while runs at least once, even if the condition is false from the start.
//This is because the code block is executed before the condition is tested.

{
    let text = "";
    let i = 0;
    do{
        text += console.log("The Number of Do-While Loop is " + i);
        i++;
    }while (i < 10)
}

//============================================================

//Comparing For and While
//A While loop is much the same as a for loop, with statement 1 and statement 3 omitted.

//For Loop Example
{
    const cars = ["BMW", "Volvo", "Saab", "Ford"];
    let i = 0;
    let text = "";

    for(;cars[i];){
        text += console.log("For Loop Cars: "+ cars[i]);
        i++;
    }
}

//While Loop Example
{
    const cars = ["BMW", "Volvo", "Lamborghini", "Ferrari"];
    let i = 0;
    let text = "";

    while (cars[i]) {
        text += console.log("While Loop Cars: " + cars[i]);
        i++;
    }
}