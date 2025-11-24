const fs = require ('fs');


fs.unlink('renamedfile.txt', (err) => {
    if (err) throw err;
    console.log('File deleted successfully!');
});