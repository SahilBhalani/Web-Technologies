function reverse_number(n) {
    n = n + "";
    return n.split("").reverse().join("");
}

console.log(Number(reverse_number(32243)));
console.log(Number(reverse_number(4658445)));