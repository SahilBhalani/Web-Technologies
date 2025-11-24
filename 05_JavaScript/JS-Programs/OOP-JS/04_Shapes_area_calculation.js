class Shape{
    calculateArea() {
        throw new Error("Method 'calculateArea()' must be overridden in subclass ")
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }


    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(){
        return this.width * this.height;
    }
}

//Circle class instance
const circle = new Circle(7);
const circleArea = circle.calculateArea();
console.log(`Circle Area: ${circleArea}`);

//Rectangle class instance
const rectangle = new Rectangle(8,9);
const rectangleArea = rectangle.calculateArea();
console.log(`Rectangle Area: ${rectangleArea}`);