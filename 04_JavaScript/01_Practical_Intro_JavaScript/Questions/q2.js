/**
 * fizz buzz
 *  number -> 20
    1->20
    if number divisble by 3 -> fizz
    if number divisble by 5 -> buzz
    if number 3 & 5 both se divisble -> fizzBuzz
    other wise -> number
 *  */

    let num = 20;
    for(let num=1;num<=20;num++){
        if(num % 3 == 0 && num % 5 == 0){
            console.log("FizzBuzz");
            break;
        } else if(num % 3 == 0){
            console.log("Fizz");
        } else if(num % 5 == 0){
            console.log("Buzz");
        } else {
            console.log(num);
        }
    }