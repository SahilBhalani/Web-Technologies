const front_back = (str) => {
    const first = str.substring(0,1);

    return first + str + first;
}

//log the result
console.log(front_back('a'));
console.log(front_back('ab'));
console.log(front_back('abc'));