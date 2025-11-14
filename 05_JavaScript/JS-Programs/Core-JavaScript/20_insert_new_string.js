const string_check = (str) => 
    (str === null || str === undefined || str.substring(0,2)=== 'Py' ? str: `Py${str}`);

///log the result
console.log(string_check("Python"));
console.log(string_check("thon"));