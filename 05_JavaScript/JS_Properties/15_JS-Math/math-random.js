//* JavaScript Random
{
    //Returns a random number:
    console.log(Math.random());
}

//* JavaScript Math.random()
// Math.random returns a random number between 0(inclusive), and 1(exclusive):
//Math.random() always returns a returns a number lower than 1.

//JavaScript Random Integers
//Math.random() used with Math.floor() can be used to return random integers.

//?NOTE
//There is no such things as JavaScript integers.
//We are talking about numbers with no decimals here.

{
    //Return a random integer from 0 to 9(both included):
    console.log(Math.floor(Math.random() * 10));

    //Return a random integer from 0 to 10(both included):
    console.log(Math.floor(Math.random() * 11));

    //Return a random integer from 0 to 99(both included):
    console.log(Math.floor(Math.random() * 100));

    //Return a random integer from 0 to 100(both included):
    console.log(Math.floor(Math.random() * 101));

    //Return a random integer from 1 to 10(both included):
    console.log(Math.floor(Math.random() * 10) + 1);

    //Return a random integer from 1 to 100(both included):
    console.log(Math.floor(Math.random() * 100) + 1);
}

//* A Proper Random Function
//As you can see from the example above, it might be a good idea to create a proper random function to use for all random integer purposes.

//The Javacript function always return a random integer between min(included) and max(excluded):
{
    function getRndInteger(min,max){
        return Math.floor(Math.random() * (max - min) + min)
    }

    console.log(getRndInteger(0,9));

    //This Javascript function always return a random integer between min and max (both included):

    function getRndInteger2(min,max){
        return Math.floor(Math.random() * (max-min + 1) + min);
    }
    console.log(getRndInteger2(1,10));
}
