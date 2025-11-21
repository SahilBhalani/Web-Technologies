//Generate pascal's triangle up to n rows in JavaScript

function generatePascalsTriangle(n) {
    let triangle = [];
    for(let i = 0; i< n ; i++){
        triangle = [];
        let number = 1;
        for(let j = 0; j<=i ; j++){
            triangle.push(number);
            number = number * (i - j) / (j + 1);
        }
        console.log(triangle);
    }
    return triangle;
}

generatePascalsTriangle(6);