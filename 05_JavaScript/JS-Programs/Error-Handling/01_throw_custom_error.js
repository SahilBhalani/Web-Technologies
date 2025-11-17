// * Throw Error for Non-Integer
function validateInteger(number) {
  if (!Number.isInteger(number)) {
    throw new Error("Invalid Number. Please input an integer.");
  }
  console.log("Number is Valid:", number);
}

//Example usage:
try {
  validateInteger(12); // valid

  validateInteger(2.12); //throw an error
} catch (error) {
  console.log("Error:", error.message);
}
