const fs = require('fs');

fs.mkdir('demo_folder',err => {
    if(err) throw err;
    console.log("Folder Created Successfully");
})
