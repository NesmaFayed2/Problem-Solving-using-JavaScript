//Given ann array and chunk size , divide the array into many subarrays
//where each subbarray is of length size

//chunk([1,2,3,4] , 2) =>[ [1,2] ,[3,4]]

function divde(array, size) {
  let result = [];

  let index = 0;
  while (index < array.length) {
    let slices = array.slice(index, index + size);
    if (slices.length < size) {
      break;
    } else {
      result.push(slices);
      index += size;
    }
  }

  return result;
}
