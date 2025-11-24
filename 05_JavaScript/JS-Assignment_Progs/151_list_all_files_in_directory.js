const fs = require("fs");

const directoryPath =
  "C:\\Web_Technologies\\05_JavaScript\\JS_Advance\\01_JS-Functions";

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  console.log("Files and folders in the directory:", files);
});
