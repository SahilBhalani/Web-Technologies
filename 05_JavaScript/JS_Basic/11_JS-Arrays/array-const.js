//* JavaScript Array Const
//In 2015, JavaScript introduced an important new keyword const.
//It has become a common practice to declare arrays using const.
{
  const cars = ["Volvo", "Saab", "BMW"];

  //? CANNOT be Reassigned
  //An array declared witjh const cannot be reassigned:
  const cars2 = ["Saab", "Volvo", "BMW"];
  cars2 = ["Toyota", "Volvo", "Audi"]; //ERROR
}

//* Arrays are not Constant
//The keyword const is a little misleading.
//It does NOT define a constant array. It defines a constant reference to an array.
//Because of this, we can still change the elements of a constant array.

//* Elements can be Reassigned
//You can change the element of a constant array:
{
  //You can create a constant array:
  const cars = ["Saab", "Volvo", "Audi"];

  //You can change an element;
  cars[0] = "Toyota";

  //You can add an element:
  cars.push("Audi");
}

//* Assigned When Declared
//JavaScript const variable must be assigned a value when they are declared:
//Meaning: An array declared with const must be initialized when it is declared.
//Using const without initializing the array is a syntx error:
{
  // const cars;// this will give error
}

//Arrays declared with var can be initialized at any time
//You can even use the array before it is declared:
{
  cars = ["Volvo", "Saab", "BMW"];
  var cars;
}

//!==============================================================
//* Const Block Scope
//An array declared with const has Block Scope.
//An array declared in a block is not the same as array declared outside the block:
{
  const cars = ["a", "b", "c"];
  //here cars[0] is "a";

  {
    const cars = ["b", "c", "a"];
    //here cars[0] is "b";
  }

  //here cars[0] is "a";
}

//An Array declared with var does not have a block scope.
{
  var cars = ["a", "b", "c"];
  //here cars[0] is "a";

  {
    var cars = ["b", "c", "a"];
    //here cars[0] is "b";
  }

  //here cars[0] is "b";
}

//!--------------------------------------------------------------
//* Redeclaring Arrays
//Redeclaring an array  declared with var is allowed anywhere in a program:
{
  var cars = ["Volvo", "BMW"]; // Allowed
  var cars = ["Toyota", "BMW"]; // Allowed
  cars = ["Volvo", "Saab"]; // Allowed
}

//Redeclaring or reassigning an array to const, in the same scope, or in the same block, is not allowed:
{
  var cars = ["Volvo", "BMW"]; // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
  {
    var cars = ["Volvo", "BMW"]; // Allowed
    const cars = ["Volvo", "BMW"]; // Not allowed
  }
}

//Redeclaring or reassigning an existing const array, in the same scope, or in the same block, is not allowed:
{
  //const cars = ["Volvo", "BMW"]; // Allowed
  const cars = ["Volvo", "BMW"]; // Not allowed
  var cars = ["Volvo", "BMW"]; // Not allowed
  cars = ["Volvo", "BMW"]; // Not allowed

  {
  //  const cars = ["Volvo", "BMW"]; // Allowed
    const cars = ["Volvo", "BMW"]; // Not allowed
    var cars = ["Volvo", "BMW"]; // Not allowed
    cars = ["Volvo", "BMW"]; // Not allowed
  }
}

//Redeclaring an array with const, in another scope, or in another block, is allowed:
{
  const cars = ["Volvo", "BMW"]; // Allowed
  {
    const cars = ["Volvo", "BMW"]; // Allowed
  }
  {
    const cars = ["Volvo", "BMW"]; // Allowed
  }
}
