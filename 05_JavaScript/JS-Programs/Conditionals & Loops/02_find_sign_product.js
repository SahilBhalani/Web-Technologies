//* Sign of Product of Three Numbers
var x = 3;
var y = -7;
var z = 2;

function getSign(value) {
    if(value > 0){
        return '+';
    } else if (value < 0){
        return '-'
    } else {
        return 'Zero';
    }
}

var signX = getSign(x);
var signY = getSign(y);
var signZ = getSign(z);

var overallSign = (signX === signY && signY === signZ ? "+" : "-");

console.log("The sign is " + overallSign);