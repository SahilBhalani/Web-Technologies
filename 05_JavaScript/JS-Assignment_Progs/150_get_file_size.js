const fs = require('fs');
fs.stat('newfile.txt', (err, stats) => {
    if (err) throw err;
    console.log(`File Size: ${stats.size} bytes`);
});
