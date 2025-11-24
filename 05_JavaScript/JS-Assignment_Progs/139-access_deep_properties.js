function deep(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let og = { a: 1, b: 2, c: { d: 3, e: 4 } };

console.log("Original Object:", og);
console.log("Deep Copy:", deep(og));
