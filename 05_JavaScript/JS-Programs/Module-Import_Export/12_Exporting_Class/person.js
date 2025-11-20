// Person.js
// Defining and exporting the Person class
export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`
    }
}