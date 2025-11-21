function pyramidStar(n) {
    for(let i = 0; i < n; i++){
        let str = '';
        for(let j = 0; j < n - i - 1; j++){
            str += ' ';
        }
        for(let k = 0; k < (2 * i + 1); k++){
            str += '*';
        }
        console.log(str);
    }
}

pyramidStar(5);