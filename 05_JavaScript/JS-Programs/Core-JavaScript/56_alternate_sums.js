// * Split Array into Two Sums Alternating Elements

const alternate_Sums = (arr) => {
  var result = [0, 0]; // intialize an array to store the element
  for (let i = 0; i < arr.length; i++) {
    if (i % 2) result[1] += arr[i];
    else 
        result[0] += arr[i];
}
return result;
};

//log the result
console.log(alternate_Sums([1, 3, 6, 2, 5, 10]));
