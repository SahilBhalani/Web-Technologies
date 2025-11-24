const fs = require("fs");
const path = require("path");
const source = path.join(__dirname, "C:\Web_Technologies", "newfile.txt");
const destination = path.join(__dirname,"C:\\Web_Technologies\\05_JavaScript\\Lec1-Practical_Intro_JavaScript" , "newfile.txt");
fs.rename(source, destination, (err) => {
  if (err) throw err;
  console.log("File moved successfully!");
});
