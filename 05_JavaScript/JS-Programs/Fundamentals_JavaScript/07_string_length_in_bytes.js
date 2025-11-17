//* Convert String Length in Bytes

const byte_size = str => new Blob([str]).size;

//test cases
console.log(byte_size('HelLo'));
console.log(byte_size('Sahil Bhalani'));