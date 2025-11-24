const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Gege",
  lastName: "Akutami",
};

let fullName = person.fullName.bind(member);
console.log(fullName());
