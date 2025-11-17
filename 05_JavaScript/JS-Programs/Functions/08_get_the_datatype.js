function getType (value) {
    const typeString = Object.prototype.toString.call(value);

    return typeString.slice(8, -1).toLowerCase();
}

//ex.
console.log(getType("Hello"));
console.log(getType(42));
console.log(getType(true));
console.log(getType(null));
console.log(getType(undefined));
console.log(getType([]));
console.log(getType({}));