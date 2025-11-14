const near_100 = (x, y) => {
    if(x != y) {
        const x1 = Math.abs(x - 100);
        const y1 = Math.abs(y - 100);

        if(x1 < y1) {
            return x;
        }
        
        if(y1 < x1) {
            return y;
        }

        return 0;
    } else {
        return false;
    }
};

//log the result
console.log(near_100(90,89));
console.log(near_100(-90,-89));
console.log(near_100(90,90));