//* JavaScript toString()
/**
 * The JavaScript toString() method converts a variable (or a value) to a string
 * It is built-in method for many data types, including numbers, arrays, dates, and objects.
 * The method is useful for:
 * ~ Converting data to readable format for display
 * ~ Ensuring type compatibility when a string is required
 * ~ Customizing objects other user interfaces
 * ~ Customizing objects for debugging
 */

//* JavaScript Array toString()
// When used on array, toString() returns the array elements as a comma separated string.
{
    const fruits = ["Banana","Orange","Apple","Mango"];
    console.log(fruits.toString());
}

//* JavaScript Date toString()
//When used on a date, toString() returns a human-readable date and time string.
{
    const d = new Date();
    console.log(d.toString());
}

//* JavaScript Number toString()
//When used on a number, toString() returns the number as a string
{
    let x = 123;
    console.log(x.toString());

    //convert to a number to a string, using base 2 (binary)
    let y = 346;
    console.log(y.toString(2));
}

//* JavaScript Function toString()
//When used on function, toString() returns the source code of the function as a string

//* JavaScript Object toString()
//When used on object, toString() an object returns "[object Object]".
//To provide a meaningful string representation, it can be overridden in the object defination:
{
    let person = {
        firstName: "John",
        lastName: "Doe",
    }
    console.log(person.toString());
}