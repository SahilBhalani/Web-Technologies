//* Generate random hexadecimal code

const random_hex = () => {
    let n = (Math.random() * 0xffff * 1000000).toString(16);

    return '#' + n.slice(0,6);
}


//test the function
console.log(random_hex());
console.log(random_hex());