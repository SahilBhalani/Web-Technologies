// * Check if First and Last Elements Are Same

const first_last_same = (nums) => {
    var end = nums.length - 1;

    if(nums.length >= 1) {
        return nums[0] == nums[end];
    }

    return false;
}

//log the result
console.log(first_last_same([10,20,30]));
console.log(first_last_same([10,20,30,10]));
console.log(first_last_same([10,10,10,10]));