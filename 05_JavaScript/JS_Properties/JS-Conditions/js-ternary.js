// The conditional operator is a shorthand for writing conditional if ... else statements

// it is called a ternary operator because it takes three operands.

//syntax
// (condition) ? expression1 : expression2

//Ex.
let age = 18;
let text = (age < 18) ? "Minor" : "Adult";
console.log(text);

//Ex.
let isMember = true;
let discount = isMember ? 0.2 : 0;
console.log(discount);

//Ex.
let _isMember = false;
let _discount = _isMember ? 0.2 : 0;