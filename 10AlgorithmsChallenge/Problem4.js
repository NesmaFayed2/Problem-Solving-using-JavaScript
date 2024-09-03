//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
//make it whith uniqe values
function sortedSquares(nums) {
  const result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1;

  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      result[index] = leftSquare;
      left++;
    } else {
      result[index] = rightSquare;
      right--;
    }
    index--;
  }

  return result;
}

function sortedSquares2(arr) {
  let result = new Array(arr.length);

  left = 0;
  right = arr.length - 1;
  let index = arr.length - 1;

  while (left <= right) {
    const leftSquare = arr[left] * arr[left];
    const rightsquare = arr[right] * arr[right];

    if (leftSquare > rightsquare) {
      result[index] = leftSquare;
      left++;
    } else if (rightsquare >= leftSquare) {
      result[index] = rightsquare;
      right--;
    }
    index--;
  }

  return [...new Set(result)];
}

