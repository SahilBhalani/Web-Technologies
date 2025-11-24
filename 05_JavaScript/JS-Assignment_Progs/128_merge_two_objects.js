const object1 = {
    name: "Sahil",
    age: 23
};

const object2 = {
    city: "surat",
    country: "India"
};
const merge = {...object1, ...object2};
console.log(merge);