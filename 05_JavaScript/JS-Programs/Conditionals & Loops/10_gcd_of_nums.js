//* GCD Of Two Numbers
let a = 336;
let b = 360;
let gcd;

while (a != b) {
  if (a > b) {
    a = a - b;
  } else {
    b = b - a;
  }
}

gcd = a;

console.log(gcd);
