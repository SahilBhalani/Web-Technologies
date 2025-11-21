function checkerboard(n) {
    for(let i = 0; i < n; i++){
        let str ='';
        for(j = 0; j< n; j++){
            if((i + j) % 2 === 0){
                str = str + 'X ';
            } else {
                str = str + 'O ';
            }
        }
        console.log(str);
    }
}

checkerboard(5);