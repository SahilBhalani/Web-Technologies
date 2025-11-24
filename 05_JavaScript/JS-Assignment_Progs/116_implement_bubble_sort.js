function bubbleSort(a){

    let swapp;
    let n = a.length - 1;
    let x = a;

    do {
        swapp = false;
        for (let i = 0; i < n; i++) {
            if(x[i] < x[i + 1]){
                let temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;

                swapp = true;
            }
        }
        n--;
    } while (swapp);
    return x;
}

console.log(bubbleSort([12,2,34,56,78,1,2,4,456,323,12,45,3,9]).reverse());