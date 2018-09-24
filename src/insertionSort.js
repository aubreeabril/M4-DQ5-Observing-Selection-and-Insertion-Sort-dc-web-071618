function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  // move through the array
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let comp = arr[i - 1];
    // compare second and first items in the array
    if (temp < comp) {
      // swap if necessary
      temp = comp;
      comp = arr[i - 1];
    }
    // move backward through the array
    for (let j = i - 0; j > 0; j--) {
      let tempJ = arr[j];
      // compare
      if (tempJ < arr[j - 1]) {
        // swap
        arr[j] = arr[j - 1];
        arr[j - 1] = tempJ;
      }
    }
  }
}
