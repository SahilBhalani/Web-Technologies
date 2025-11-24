const fs = require('fs');

const jsonData = {
    name: "John Doe",
    age: 30,
    profession: "Software Engineer"
};

const jsonString = JSON.stringify(jsonData, null, 2);

fs.writeFile('output.json', jsonString, (err) => {
    if(err) {
        console.error('Error writing JSON to file:', err);
    } else {
        console.log('Successfully wrote JSON data to output.json');
    }
});
