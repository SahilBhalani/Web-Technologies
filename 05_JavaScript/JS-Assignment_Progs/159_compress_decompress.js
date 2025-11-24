const fs = require("fs");
const zlib = require("zlib");

const inputFile = "newfile.txt";
const compressedFile = "newfile.txt.gz";
const decompressedFile = "newfile_decompressed.txt";

function compressFile(input, output) {
  const gzip = zlib.createGzip();
  const inputStream = fs.createReadStream(input);
  const outputStream = fs.createWriteStream(output);

  inputStream.pipe(gzip).pipe(outputStream);

  outputStream.on("finish", () => {
    console.log(`File compressed to ${output}`);
  });

  outputStream.on("error", (err) => {
    console.error("Compression error:", err);
  });
}

function decompressFile(input, output) {
  const gunzip = zlib.createGunzip();
  const inputStream = fs.createReadStream(input);
  const outputStream = fs.createWriteStream(output);

  inputStream.pipe(gunzip).pipe(outputStream);

  outputStream.on("finish", () => {
    console.log(`File decompressed to ${output}`);
  });

  outputStream.on("error", (err) => {
    console.error("Decompression error:", err);
  });
}

compressFile(inputFile, compressedFile);

setTimeout(() => {
  decompressFile(compressedFile, decompressedFile);
}, 1000);
