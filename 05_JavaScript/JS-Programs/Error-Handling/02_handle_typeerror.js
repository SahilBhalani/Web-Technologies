// * Handle TypeError in Try-Catch

try {
    const undefinedObject = undefined;
    console.log(undefinedObject.property);
} catch (error) {
    if(error instanceof TypeError) {
        console.log('Error: Property access to undefined object');
    } else {
        throw error;
    }
}