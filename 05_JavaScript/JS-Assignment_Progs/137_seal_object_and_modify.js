const obj = {
    firstName: "Sahil",
    lastName: "Bhalani",
    age: 23
}

Object.seal(obj);
delete obj.age;
console.log(obj);