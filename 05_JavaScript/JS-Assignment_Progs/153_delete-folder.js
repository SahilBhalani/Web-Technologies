const fs = require ('fs');

fs.rmdir("demo_folder", err => {
    if(err) throw err;
    console.log("Folder Deleted Successfully");
})