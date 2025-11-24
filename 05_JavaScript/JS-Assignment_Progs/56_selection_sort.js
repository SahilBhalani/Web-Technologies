function selectionSort(arr, compareFn) {
  function compare(a, b) {
    return a - b;
  }

  var min = 0;
  var index = 0;
  var temp = 0;

  compareFn = compareFn || compare;

  for (let i = 0; i < arr.length; i++) {
    index = i;
    min = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (compareFn(min, arr[j]) > 0) {
        min = arr[j];
        index = j;
      }
    }

    temp = arr[i];
    arr[i] = min;
    arr[index] = temp;
  }
  return arr;
}

console.log(
  selectionSort([3, 0, 2, 5, -1, 4, 1], function (a, b) {
    return a - b;
  })
);
console.log(
  selectionSort([3, 0, 2, 5, -1, 4, 1], function (a, b) {
    return b - a;
  })
);
