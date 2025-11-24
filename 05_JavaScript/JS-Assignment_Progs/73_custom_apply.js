const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    "firstName" : "Sahil",
    "lastName": "Bhalani" 
}

console.log(person.fullName.apply(person1));