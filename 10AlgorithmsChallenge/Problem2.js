//Given an integer , return an integer that is in reverse

function reverseNum(num) {
  let reversed = num.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(num);
}
