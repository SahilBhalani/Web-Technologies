// * Sum of 3 Elements in Array (Length 3)
const sum_nums = (nums) => {
    const [num1, num2, num3] = nums;

    return num1 + num2 + num3;
}

//log the result
console.log(sum_nums([20,22,34]));
console.log(sum_nums([5,7,7]));
console.log(sum_nums([0,22,-34]));