// * Handle RangeError for Invalid Index
function accessArrayElements (array, index) {
    try {
        const element = array[index];
        if(element === undefined){
            throw new RangeError('Index out of bounds');
        }
        console.log('Accesed element:', element);
    } catch (error) {
        if(error instanceof RangeError) {
            console.log('Error: Invalid index. Please provide a valid index');
        } else {
            console.log('Error:',error.message);
        }
    }
}

//ex
const nums = [1,2,3,4,5];
accessArrayElements(nums,1);
accessArrayElements(nums,5);