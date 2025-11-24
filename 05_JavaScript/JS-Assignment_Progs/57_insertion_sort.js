const insertion_Sort = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let j = i - 1;
        let temp = nums[i];
        while(j >= 0 && nums[j] > temp) {
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j+1] = temp;
    }
    return nums;
}

console.log(insertion_Sort([4,3,6,3,65,26,75,12,78,98,23,12]));