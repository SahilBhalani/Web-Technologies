const fs = require('fs');

fs.copyFile('renamedfile.txt', 'copy_of_renamedfile.txt', (err) => {
    if (err) throw err;
    console.log('Content copied successfully!');
});
