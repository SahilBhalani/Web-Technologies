//* JavaScript Object Managemnet

/**
 * * Property Management Methods
 *
 * ~ Adding or Changing an object property
 * Object.defineProperty(object, property, descriptor)
 *
 * ~ Adding or Changing object properties
 * Object.defineProperties(object, descriptors)
 *
 * ~ Accessing a Property
 * Object.getOwnPropertyDescriptor(object, property)
 *
 * ~ Accesing Properties
 * Object.getOwnPropertyDescriptors(object)
 *
 * ~ Return all properties as an array
 * Object.getOwnPropertyNames(object)
 *
 * ~ Accessing the prototype
 * Object.getPrototypeOf(object)
 */

//* JavaScript Object.defineProperty()
/**
 * The Object.defineProperty() method can be used to:
 * ~ Adding a new property to an object
 * ~ Changing property values
 * ~ Changing property metadata
 * ~ Changing object getters and setters
 *
 */

//* Adding a new Property
{
  //This example adds a new property to an object:

  const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN",
  };

  //Add a Property
  Object.defineProperty(person, "year", { value: "2008" });
  console.log(person);
}

//* Changing a Property Value
//This example changes a property value:
{
  const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN",
  };

  //change a Property
  Object.defineProperty(person, "language", { value: "NO" });
  console.log(person);
}

//? Property Attributes
/**
 * All Properties have a name. In addition they also have a value.
 * The value is one of the property's attributes.
 * Other attributes are: enumerable, configurable, and writable
 * These attributes define how the property can be accessed (is it readable? , is it writable?)
 * In JavaScript, all attributes can be read, but only the value attribute can be changed (and only if the property is writable)
 */

//* Changing Meta Data
{
  //The following property meta data can be changed:
  writable: true; //Property value can be changed
  enumerable: true; //Property can be enumerated
  configurable: true; //Property can be reconfigured

  writable: false; //Property value can not be changed
  enumerable: false; //Property can be not enumerated
  configurable: false; //Property can be not reconfigured

  //Getters and setters can also be changed

  //defining a getter
  // get: function() { return language};

  //defining a setter
  //  set: function(value) { language = value};

  const person = {
    language: "EN",
  };

  //This example makes language read-only:
  Object.defineProperty(person, "language", { writable: false });

  //This example makes language not enumerables:
  Object.defineProperty(person, "language", { enumerable: false });
}

//!--------------------------------------------------------------
//* JavaScript getOwnPropertyNames()
//The Object.getOwnPropertyNames() method can:
//~ list object properties
//Syntax - Object.getOwnpropertyNames(object)
{
  // Create an Object
  const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN",
  };

  //Get all Properties
  console.log(Object.getOwnPropertyNames(person));
}

{
  //Object.getOwnPropertyNames() will also list properties that is not enumerable:
  const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN",
  };

  //Set the language Property no enumerable
  Object.defineProperty(person, "language", { enumerable: false });

  //get all properties
  console.log(Object.getOwnPropertyNames(person));
}

//* JavaScript Object.keys()
//The Object.keys() method can:
//~ List enumerable object properties
{
  //The Example used Object.keys() instead of Object.getOwnPropertyNames():
  const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN",
  };

  //Change the "language" Property
  Object.defineProperty(person, "language", {enumerable:false});

  //Get all Enumerables Properties
  console.log(Object.keys(person));
  
  //? NOTE:
  //The getOwnPropertyNames() method returns all properties.
  //The Objec.keys() method returns all enumerables properties.
  //If you define object properties without enumerable:false, the two methods will return the same.
}

//* Adding Getters and Setters
//The Object.defineProperty() method can also be used to add Getters and Setters:
{
    const person = {firstName:"John", lastName:"Doe"};

    //define a getter
    Object.defineProperty(person, "fullName", {
        get:function (){return this.firstName + " " + this.lastName;}
    });

    //Display Name
    console.log(person.fullName);
}

//* A Counter Example
{
    //Define object
    const obj = {counter: 0};

    //Define setters
    Object.defineProperty(obj,"reset", {
        get: function() {this.counter = 0;}
    });

    Object.defineProperty(obj, "increment", {
        get : function() {this.counter++;}
    });

    Object.defineProperty(obj, "decrement", {
        get : function() {this.counter--;}
    });

    Object.defineProperty(obj, "add", {
        set: function(value) {this.counter += value;}
    });

    Object.defineProperty(obj, "subtract", {
        set : function(i) {this.counter -= i;}
    })

    //Play with the counter
    obj.reset;
    obj.add = 5;
    obj.subtract = 1;
    obj.increment;
    obj.decrement;

    console.log(obj);
}

//* Prototype Properties
//Javascript objects inherit the properties of thier prototype.
//The delete keyword does not delete inherited property, it will affect all objects inherited from the prototype