const obj = {
    "firstName" : "Sahil",
    "lastName" : "Bhalani",
    "age": 50
}
for (const [key, value] of Object.entries(obj)) {
     console.log(`${key}: ${value}`);
}