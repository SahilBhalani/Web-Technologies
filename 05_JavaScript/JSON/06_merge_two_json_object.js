const obj1 = {name: "Sahil"};
const obj2 = {age: 20 , city: "surat"};

const merged = {...obj1 , ...obj2};
console.log(merged);