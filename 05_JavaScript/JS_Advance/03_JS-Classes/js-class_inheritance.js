//* Class Inheritance
//To create a class inheritance, use the extends keyword.
//A class created with a class inheritance inherits all the methods from another class:
{
  //Create a class named "model" which will inherit the methods from the "Car" class:
  class Car {
    constructor(brand) {
      this.name = brand;
    }

    present() {
      return "I have a " + this.name;
    }
  }

  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }

    show() {
      return this.present() + ", It is a " + this.model;
    }
  }

  let myCar = new Model("Ford", "Mustang");
  console.log(myCar.show());

  //The super() method refers to the parent class.
  //By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
  //? Inheritance is useful for code reusability: reuse propertiies and methods of an existing class when you create a new class.
}

//!--------------------------------------------------------------
//* Getters and Setters
//Classes also allow you to use getters and setters
//It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, of before you set them.
//To add getters and setters in the class, use the get and set keywords.
{
  //Create a getter and setter for the "Carname" property:
  class Car {
    constructor(brand) {
      this.carname = brand;
    }

    get cname() {
      return this.carname;
    }

    set cname(x) {
      this.carname = x;
    }
  }

  const myCar = new Car("Ford");
  console.log(myCar.cname);

  //?NOTE: Even if the getter is a method, you do not use parentheses when you want to get the property value.
}

//The name of the getter/setter method cannot be the same as the name of the property, in this case carname.
//Many Programmers use an underscore character _ before the property name to separate the getter/setter from the actual property:
{
  //You can use the underscore character to separate the getter/setter from the actual property:
  class Car {
    constructor(brand) {
      this._carname = brand;
    }

    get carname() {
      return this._carname;
    }

    set carname(x) {
      this._carname = x;
    }
  }

  const myCar = new Car("Porsche");
  console.log(myCar.carname);
}

//To use a setter, use the same syntax as when you set a property value, without parentheses:
{
  //Use a setter to change the carname to "Volvo";
  class Car {
    constructor(brand) {
      this._carname = brand;
    }

    get carname() {
      return this._carname;
    }

    set carname(x) {
      this._carname = x;
    }
  }

  const myCar = new Car("Mercedes");
  myCar.carname = "Volvo";
  console.log(myCar.carname);
}

{
  //You cannot use the class yet.
  //myCar = new Car("Ford") will raise an error.

  class Car {
    constructor(brand) {
        this.carname = brand;
    }
  }

  //Now You can use the class:
  const myCar = new Car("Honda");
  console.log(myCar.carname);

  //? NOTE: For other declarations, like functions, you will NOT get an error when you try to use it before it is declared, because the default behaviour of JavaScript declaration are hoisting(moving the declaration to the top).
}
