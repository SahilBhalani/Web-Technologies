//* Check The larger Number
function compareNumber(num1, num2) {
  if (num1 > num2) {
    return "The larger of " + num1 + " and " + num2 + " is " + num1;
  } else if (num2 > num1) {
    return "The larger of " + num1 + " and " + num2 + " is " + num1;
  } else {
    return "The values " + num1 + " and " + num2 + "are equal";
  }
}

var result = compareNumber(20,10);
console.log(result);

result = compareNumber(40,60);
console.log(result);

result = compareNumber(-90, -40);
console.log(result);
