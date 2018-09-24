function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for (let i = 0; i < arr.length; i++) {
    let smallestIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestIdx]) {
        smallestIdx = j;
      }
    }
    if (i !== smallestIdx) {
      let temp = arr[i];
      arr[i] = arr[smallestIdx];
      arr[smallestIdx] = temp;
    }
  }
}
