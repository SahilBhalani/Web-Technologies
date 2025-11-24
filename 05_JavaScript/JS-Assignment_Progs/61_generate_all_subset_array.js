//generate all subsets of an arrat in js
function generateSubsets(arr){
    let subsets = [];
    let total = Math.pow(2, arr.length);

    for(let i = 0; i < total; i++){
        let subset = [];
        for(let j = 0; j < arr.length; j++){
            if(i & (1 << j)){
                subset.push(arr[j])
            }
        }
        subsets.push(subset);
    }
    return subsets;
}
let arr = [1,2,3];
console.log(generateSubsets(arr));