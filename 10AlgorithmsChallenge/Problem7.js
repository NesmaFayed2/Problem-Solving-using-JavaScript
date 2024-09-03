// given an integer, if 2 adjecent digit are both odd or even, we can do a swap for these digit.
// Like for 597683
// swap 5 and 9 -> 957683
// swap 5 and 7 -> 975683
// swap 6 and 8 -> 975863

// get largest number 975863

function swapOddEven(number) {
  function swap(array, index1, index2) {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  }

  let arr = number.toString().split("").map(Number);
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0) ||
      (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0)
    ) {
      swap(arr, i, i + 1);
    }
  }

  return parseInt(arr.join(""), 10);
}
