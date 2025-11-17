//* Random Number in Range

const random_num_range = (min,max) => Math.random()* (max - min) + min;

//test case
console.log(random_num_range(5,10));
console.log(random_num_range(5,8));
console.log(random_num_range(1,5));
console.log(random_num_range(-1,-5));