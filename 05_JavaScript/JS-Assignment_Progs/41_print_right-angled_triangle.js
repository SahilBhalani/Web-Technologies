function rightAngledTriangle(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += "* ";
    }
    console.log(str);
  }
  for (let i = n - 2; i >= 0; i--) {
    let str = "";
    for (j = 0; j <= i; j++) {
      str += "* ";
    }
    console.log(str);
  }
}

rightAngledTriangle(5);
