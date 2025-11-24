const fs = require('fs');

const fileToWatch =  './newfile.txt'

fs.watch(fileToWatch, (eventType, fileName) => {
  if (eventType === 'rename') {
    console.log(`${fileName} was added/deleted`);
  } else {
    console.log(`${fileName} was updated`);
  }
});