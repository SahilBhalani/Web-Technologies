const fs = require ('fs');

fs.readFile('newfile.txt', (err, data) => {
    if(err) throw err;
    console.log(data.toString());
})