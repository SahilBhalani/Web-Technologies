const obj = {
  firstName: "Sahil",
  lastName: "Bhalani",
  age: 23,
  State: "Gujarat",
  city: "Surat",
};

let count = 0;
for (i in obj) {
  if (obj.hasOwnProperty(i)) ++count;
}

console.log(count);
