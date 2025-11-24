const fs = require("fs");
const path = require("path");

const filesToMerge = ["newfile.txt", "output.json", "renamedfile.txt"];

const outputFile = "merged_output.txt";

function mergeFiles(fileList, output) {
  let mergedContent = "";

  fileList.forEach((file) => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, "utf8");
      mergedContent += content + "\n"; //
    } else {
      console.error(`File not found: ${file}`);
    }
  });

  fs.writeFileSync(output, mergedContent, "utf8");
  console.log(`Merged content written to ${output}`);
}

mergeFiles(filesToMerge, outputFile);
