const number_range = (x,y) => {
    return (
        (x >= 40 && x <= 60 && y>=40 && y<=60) || (x >= 70 && x<=100 && y >=70 && y <= 100)
    );
};

//log the result
console.log(number_range(44,56));
console.log(number_range(70,95));
console.log(number_range(50,89));