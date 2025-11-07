//* JavaScript Modules
/**
 * JavaScript Modules is a fundamental feature in Modern JavaScript
 * Modules are code files that can export variablesadn function to other files
 * You use import and export to interchange functionalities between modules.
 */

//* How to Use Modules
/**
 * Modules allow you to breakup code into separate files
 * Modules are important from external files with the import statement
 * Modules rely on type="module" in the <script> tag
 */
{
  //Example on modules.html
}

//* The Export Keyword
//To share values with other files, a module use the export keyword.
//A module can have multiple named exports and, optionally, one default export.

//* Named Exports
{
  //let us look at the file named person.js
  ///You can create named exports two ways. In-line individually, or all at once at the bottom.

  //Ex.
  //In-line individually:
  //export const name = "jesse";
  //export const age = 40;

  //All at once at the bottom:
  const name = "saii";
  const age = 20;

  //export(name,age);
}

//* Default Exports
//let us look at the file named message.js
/**
 * const message = () => {
   const name = "Jesse";
   const age = 40;
   return name + ' is ' + age + 'years old.';
   };

   export default message;
 * ? NOTE: You can only have one default exports in a file
   
   Modules Can Export
   ~ Variables
   ~ Functions
   ~ Objects 
   ~ Classes
 */


//* Import
//You can import modules into a file in two ways , based on if they are named exports or default exports
//Named exports are constructed using curly braces. Default exports are  not.   

//* Import Named Exports
//Import named exports from the file person.js
// import {name, age} from "./person.js";

//* Import Default Exports
//You can give a default exports any name you like, during import, without using curly braces:
//Import a default export from the file message.js
// import text from "./message.js";

//* Importing Everything
//You can import all named exports from a module as a single object using the * syntax.
{
  //  import * as person from "./person.js"
}

//? NOTE:
//Modules only work with the HTTP(s) protocol.
//A web-page opened via the file:// protocol cannot use import / export.


