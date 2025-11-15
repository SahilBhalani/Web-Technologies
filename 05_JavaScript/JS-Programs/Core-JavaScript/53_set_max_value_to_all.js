//* Set All Elements to Largest of First/Last in Array
const all_max = (nums) => {

    const max_val = Math.max(...nums)

    nums[0] = max_val;
    nums[1] = max_val;
    nums[2] = max_val;

    return nums;
}

//log the result
console.log(all_max([12,5,60]));
console.log(all_max([-1,-2,0]));
console.log(all_max([12,10,3]));