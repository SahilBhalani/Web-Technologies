//* Check Whether an 'input' is String or not

is_string = function (input) {
  if (Object.prototype.toString.call(input) === "[object String]") return true;
  else return false;
};

console.log(is_string("sahilbhalani"));
console.log(is_string([1, 2, 4, 0]));
