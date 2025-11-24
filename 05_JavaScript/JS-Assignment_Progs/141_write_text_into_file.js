const fs = require ('fs');

fs.writeFile("newfile.txt", "Hey There!! It's a new file made in js", err => {
    if(err) throw err;
    console.log('File Written successfully!');
})