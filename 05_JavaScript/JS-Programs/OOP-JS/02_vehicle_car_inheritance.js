//* Vehicle and Car Classes with Inheritance
class Vehicle{
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayDetails(){
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}

class Car extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model, year)
        this.doors = doors;
    }

    displayDetails(){
        super.displayDetails();
        console.log(`Doors: ${this.doors}`);
    }
}

//create an instance
const vehicle = new Vehicle('Ford', 'F-150', 2020);

console.log('Vehicle Details:');
vehicle.displayDetails();

const car = new Car('Honda', 'Accord', 2023, 4);

console.log('\n Car Details');
car.displayDetails();