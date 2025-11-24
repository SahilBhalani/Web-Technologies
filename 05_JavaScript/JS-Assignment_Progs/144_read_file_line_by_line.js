const fs = require ('fs');
const readline = require('readline')

let rl = readline.createInterface({
    input: fs.createReadStream('newfile.txt')
});

rl.on('line', function(line){
     console.log(line);
})