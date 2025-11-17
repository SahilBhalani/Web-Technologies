// * Check y/yes or n/no in String

const yes_no = (val, def = false) => 
    /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;


//Test cases
console.log(yes_no('Y'));
console.log(yes_no('yes'));
console.log(yes_no('n'));
console.log(yes_no('Fooooo',false));