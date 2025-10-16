/***
 * For Loops can execute a block of code a number of times.
 *
 * For Loops are fundamental for tasks like performing an action multiple times.
 */
//ex.
{
  let text = "";
  for (let i = 0; i < 5; i++) {
    text += console.log("The number is " + i);
  }
}

//Use a for loop to collect the car names from the card array:
{
    const cars = ["BMW", "Volvo", "Saab", "Ford"];
    let len = cars.length;

    let text = "";
    for (let i = 0; i < len; i++) {
        text += console.log(cars[i]);
        
    }
}

// Loop Scope
// Using var in a loop
{
    var i = 5;
    for (var i = 0; i < 10; i++){
        console.log(i);
    }

    console.log("Outside of var Block I is " + i);
    // here i is 10
}

//Using let in a loop
{
    let i = 5;
    for (let i = 0; i < 10; i++){
        console.log(i);
    }

    //Here i is 5
    console.log("Outside of let block I is " + i);
}