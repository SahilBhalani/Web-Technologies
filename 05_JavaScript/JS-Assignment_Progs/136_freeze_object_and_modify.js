const obj = {
    firstName: "Sahil",
    lastName: "Bhalani",
    age: 23
}

Object.freeze(obj);
obj.age = 40;
console.log(obj);