// * find 3 digit armstrong Number

function armstrongDigits() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        let pow = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k,3);
        let plus = i * 100 + j * 10 + k;

        if(pow == plus){
            console.log(pow);
        }
      }
    }
  }
}

armstrongDigits();
