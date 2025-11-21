function shallow(obj) {
  return Object.assign({}, obj);
}
function deep(obj) {
  return JSON.parse(JSON.stringify(obj));
}
let og = { a: 1, b: 2, c: { d: 3, e: 4 } };

let sh = shallow(og);
let dp = deep(og);

og.c.d = 99;
console.log("Original Object:", og);
console.log("Shallow Copy:", sh);
console.log("Deep Copy:", dp);

