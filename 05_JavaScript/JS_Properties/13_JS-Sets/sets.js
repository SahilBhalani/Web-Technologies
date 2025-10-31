//* JavacScript Sets
/**
 * A JavaScript is a collection of unique values.
 * Each Value can occur once in a set.
 * The values can be of any type, premitive values or projects.
 */

//* How to Create a Set
/**
 * You can create a JavaScript Set by:
 * ~ Passing an array to new Set()
 * ~ Create an empty set and use add() to add values.
 */

//* The new Set() Method
//Pass an array to the new Set() constructor:
{
  //Create a Set
  const letters = new Set(["a", "b", "c"]);

  //Create a set and add values:
  const letters2 = new Set();

  letters2.add("a");
  letters2.add("b");
  letters2.add("c");

  //Create a Set and add variables:
  const letters3 = new Set();

  const a = "a";
  const b = "b";
  const c = "c";

  letters3.add(a);
  letters3.add(b);
  letters3.add(c);
}

//* The add() Method
{
    const letters = new Set();
  letters.add("d");
  letters.add("e");

  //If you add equal elements, only the first will be saved:
  letters.add("a");
  letters.add("b");
  letters.add("c");
  letters.add("c");
  letters.add("c");
  letters.add("c");
  letters.add("c");
  letters.add("c");
}

//* Listing the Elements
//You can list all Set elements (values) with a for..of loop:
{
    //Create a Set
    const letters = new Set(["a","b","c"]);

    //List all Elements
    let text = "";
    for ( const x of letters){
        text += x + " ";
    }
    console.log(text);
}

//* Sets are Objects
{
    const letters = new Set();
    console.log(typeof letters);

    console.log(letters instanceof Set);
}
