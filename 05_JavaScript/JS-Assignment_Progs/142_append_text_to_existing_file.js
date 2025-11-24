const fs = require ('fs');

fs.appendFile("newfile.txt", "\nThis is appended text.", err => {
    if(err) throw err;
    console.log('Text Appended successfully!');
})