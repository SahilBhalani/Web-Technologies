function floydsTriangle(n){
    let num = 1;
    for(let i = 1; i<= n ; i++){
        let str = '';
        for(let j = 1; j <= i; j++){
            str += num + ' ';
            num++;
        }
        console.log(str);
    }
}

floydsTriangle(5);