const obj = { name: "Sahil" , city: "Surat"};

const upper = Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key.toUpperCase(), value])
);

console.log(upper);