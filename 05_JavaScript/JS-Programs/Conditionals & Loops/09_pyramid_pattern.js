//* Print Pyramid Pattern
var x, y, chr;

for (let i = 1; i <=6; i++) {
  for (let j = 1; j < i; j++) {
    chr = chr + "*";
  }

  console.log(chr);

  chr = '';
}
