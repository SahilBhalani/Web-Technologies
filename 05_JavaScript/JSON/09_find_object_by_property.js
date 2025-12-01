const students = [
    {id : 1, name: "Sahil"},
    {id : 2, name: "Neel"},
    {id : 3, name: "Om"},
];

const results = students.find(student => student.id === 2);
console.log(results);