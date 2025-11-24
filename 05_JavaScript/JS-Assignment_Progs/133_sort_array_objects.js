let arr= [
    {name: "John", age: 25},
    {name: "Alice", age: 30},
    {name: "Bob", age: 20}
]
arr.sort((a,b) => a.age - b.age);
console.log(arr);