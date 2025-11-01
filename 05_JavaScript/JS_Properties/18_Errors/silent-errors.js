//* Silent Errors
/***
 * Javascript can fail silently.
 * A silent error will not stop your program. The execution will continue
 * The reason for silent errors is historical
 * The First version of JavaScript did not have try...catch exceptions.
 */
//? NOTE- Silent errors are issues that do no throw exception or stop execution, but still cause logic bugs, unexpected behaviour, or failure that are easy to miss.

{
    //silent errors will not stop your program.
    let x = 1 / 0;
    console.log(x);

    //Assignment , not comparison
    let isActive = false;

    if(isActive = true){
        let result = "Active!";
        console.log(result);
    }

    //The = assigns true instead of checking equality.
    //The next line runs silently and prints "Active!", even though isActive is false.

    //Many numeric operations that fail produce NaN (Not an exception)
    //JavaScript will not crash. It just quietly gives you NaN and keeps going
    //NaN - no error, just wrong data
    const result = parseInt("abc");
    console.log(result);


    //Accessing a missing property just returns undefined silently
    const user = {};
    let reass = user.name;
    console.log(reass);
}

{
    // JavaScript coerces types diffrently per operator
    //Type coercion hides bugs. Program continues, but logic is wrong
    let res1 = ('5' + '2');
    let res2 = ('5' - '2');

    console.log(res1);
    console.log(res2);
}