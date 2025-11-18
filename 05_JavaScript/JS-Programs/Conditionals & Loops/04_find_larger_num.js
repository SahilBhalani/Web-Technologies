//* Largest of Five Numbers
var a = -5;
var b = -2;
var c = -6;
var d = 0;
var f = -1;

if(a > b && a > c && a > d && a > f) {
    console.log(a);
} else if(b > a && b > c && b > d && b > f){
    console.log(b);
} else if (c > a && c > b && c > d && c > f){
    console.log(c);
} else if(d > a && d > b && d > c && d > f){
    console.log(d);
} else {
    console.log(f);
}