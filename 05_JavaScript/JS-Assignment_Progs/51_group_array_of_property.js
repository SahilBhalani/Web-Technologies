let arr = [
    {name: "Sahil", age: 21},
    {name: "Nitya", age: 21},
    {name: "Akhil", age: 23},
    {name: "Arjun", age: 23}
];
let grouped = arr.reduce((acc, obj) => {
    let key = obj.age;
    if(!acc[key]){
        acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
}, {});
console.log(grouped);