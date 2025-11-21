function diamondStar(n){
    
    for(let i = 0; i < n; i++) {
        let str='';
        for(let j = 0; j < n - i - 1; j++) {
            str += ' ';
        }
        for(let k = 0; k < (2 * i + 1); k++){
            str += '*';
        }
        console.log(str);
    }

    for(let i = n - 2; i>= 0; i--){
        let str = '';
        for(j = 0; j < n - i - 1; j++){
            str += ' ';
        }
        for(let k = 0; k < (2 * i + 1); k++){
            str += '*';
        }
        console.log(str);
    }
}

diamondStar(5);