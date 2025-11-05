//* JavaScript Accessors (Getters and Setters)
//Getters and setters allow you to define Object Accessors (Computed Properties)

//* JavaScript Getter (The get Keyword)
//This examples uses a lang property to get the value of the language property
{
    const person = {
        firstName: "John",
        lastName: "Doe",
        language: "en",
        get lang() {
            return this.language;
        }
    };

    //Display data from the object using a getter:
    console.log(person.lang);
}

//* JavaScript Setter (The set Keyword)
//This example uses a lang property to set the value of the language property
{
     const person = {
        firstName: "John",
        lastName: "Doe",
        language: "",
        set lang(lang) {
          this.language = lang;
        }
    };

    //Set an object property using a setter:
    person.lang = "jp";

    //display data from the object:
    console.log(person.language);
}

//* JavaScript Function or Getter?
//What is the difference between these two examples?
{
    //ex1
    const person = {
        firstName: "John",
        lastName: "Doe",
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };

    // Display data from the object using a method:
    console.log(person.fullName());
}
{
    //Ex2
    const person = {
        firstName: "John",
        lastName: "Doe",
        get fullName() {
            return this.firstName + " " + this.lastName;
        }
    };

    //Display data from the object using a getter:
    console.log(person.fullName);
}

//Example 1 access fullName as a function: person.fullName().
//Example 2 access fullName as a property: person.fullName.
//The second example provides a simpler syntax.

//* Data Quality
//JavaScript can secure better data quality when using getters and setters.
//Using the lang property, in this example, return the value of the language property in upper case:
{
    const person = {
        firstName: "John",
        lastName: "Doe",
        language: "en",
        get lang() {
            return this.language.toUpperCase();
        }
    };

    //Display data from the object using a getter:
    console.log(person.lang);
}
//Using the lang property, in this example, stores an upper case value in the language property:
{
    const person = {
        firstName: "John",
        lastName: "Doe",
        language: "",
        set lang(lang){
            this.language = lang.toUpperCase();
        }
    };

    //set an object property using a setter
    person.lang = "jp";

    //display data from the object
    console.log(person.language);
}

//* Why Using Getters and Setters?
/**
 * ~ It Gives simpler syntax
 * ~ It allows equa; syntax for properties and methods
 * ~ It can secure better data quality
 * ~ It is useful for doing things behind-the-scenes
 */
