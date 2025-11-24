const fs = require("fs");
const path = require("path");

const fileToRead = "newfile.txt";

function countWordsAndLines(filename) {
  if (!fs.existsSync(filename)) {
    console.error(`File not found: ${filename}`);
    return;
  }
  const data = fs.readFileSync(filename, "utf8");
  const lines = data.split("\\n").length;
  const words = data.split(/\\s+/).filter((word) => word.length > 0).length;

  console.log(`File: ${filename}`);
  console.log(`Number of lines: ${lines}`);
  console.log(`Number of words: ${words}`);
}

countWordsAndLines(fileToRead);
