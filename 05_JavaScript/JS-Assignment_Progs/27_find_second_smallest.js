function findSecondSmallest(arr) {
  let first = Infinity,
    second = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      second = first;
      first = arr[i];
    } else if ((arr[i] < second) & (arr[i] != first)) {
      second = arr[i];
    }
  }
  return second;
}

console.log(findSecondSmallest([12, 35, 1, 10, 34, 1]));
