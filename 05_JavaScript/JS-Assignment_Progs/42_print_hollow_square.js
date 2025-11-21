function hollowSquare(num) {
  for (let i = 1; i <= num; i++) {
    let str = "";
    for (j = 1; j <= num; j++) {
      if (i === 1 || i === num || j === 1 || j === num) {
        str += "* ";
      } else {
        str += "  ";
      }
    }
    console.log(str);
  }
}

hollowSquare(5);
