//* JavaScript Function bind()

//* Function Borrowing
//With the bind() method, an object can borrow a method from another object.
{
    //The example below creates 2 objects (person and member)
    //The member object borrows the fullname method from the person object:
    const person = {
        firstName: "John",
        lastName:"Doe",
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    }

    const member = {
        firstName: "Gege",
        lastName: "Akutami"
    }

    let fullName = person.fullName.bind(member);
    console.log(fullName());
} 

//* Preserving this
//Sometimes this bind() methods has to be used to prevent losing this.
//In the following example, the person object has a display method. In the display method, this refers to the person object:
{
    const person = {
        firstName: "John",
        lastName: "Doe",
        display: function() {
            let x = document.getElementById('demo');
            x = this.firstName + " " + this.lastName;
        }
    }

    console.log(person.display());
}

//When a function is used as a callback, this is lost.
//This example will try to display the person name after 3 seconds, but it will display undefined instead
{
    const person = {
        firstName: "Gojo",
        lastName: "Satoru",
        display: function () {
            let x = document.getElementById('demo3');
            x = this.firstName + " " + this.lastName;
        }
    }

    console.log(setTimeout(person.display(), 3000));
}

//The binnd() method solves this problem
//In the following example, the bind() method is used to bind person.display to person.
{
    //This example will display the person name after 3 seconds:
    const person = {
        firstName: "Yuji",
        lastName: "Itadori",
        display: function() {
           let x = this.firstName + " " + this.lastName;
        }
    }

    let display = person.display.bind(person);
    console.log(setTimeout(display, 3000));
}