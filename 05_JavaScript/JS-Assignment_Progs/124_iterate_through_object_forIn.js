const obj = {
    "firstName" : "Sahil",
    "lastName" : "Bhalani",
    "age": 50
}

for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    const element = obj[key];
    console.log(element);
}