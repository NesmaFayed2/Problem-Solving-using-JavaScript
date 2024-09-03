/*Write a function that takes an array with arbitrary elements and a number as arguments. 
Return a new array, the first element should be either the given number itself.
or zero if the number is smaller than 6. 
The other elements should be the elements of the original array.
Try not to mutate the original array*/
function myFunction(arr, num) {
  let newarr = [];
  num >= 6 ? (newarr[0] = num) : (newarr[0] = 0);
  for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[i]);
  }
  console.log(newarr);
}

function myFunction2(arr, num) {
  return [...(num > 5 ? [num] : [0]), ...arr];
}

//his implementaion
function myFunction(arr, num) {
  return [...(num > 5 ? [num] : [0]), ...arr];
}
