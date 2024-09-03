//Given a string . return a new string with a reversed order of charaters

//my try :
function reverse2(str) {
  let arr = [...str];
  let result = [];
  for (let i = arr.length; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result.join("");
}

// algorithm with new javascript syntax

function reverse1(str) {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

// another way using built-in function

function reverse3(str) {
  //   //string to array
  //   let strToArray = str.split("");

  //   //reverse the array
  //   strToArray.reverse();

  //   //return array back to string
  //   return strToArray.join("");

  return str.split("").reverse().join("");
}
