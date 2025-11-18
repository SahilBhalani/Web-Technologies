//* Person Class with Details
class Person{
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Country: ${this.country}`);
    }
}

//instance Creation
const person1 = new Person('Franchesko Bernauli', 25, 'USA');
const person2 = new Person('Lightning McQueen', 45, 'LA');

//display
console.log('Person-1 Details:');
person1.displayDetails();
console.log('Person-2 Details:');
person2.displayDetails();