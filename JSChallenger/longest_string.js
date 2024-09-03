function LongestString(arr) {
  let string = "";
  let finalresult = "";
  for (let i = 0; i < arr.length; i++) {
    string = arr[i];
    if (string.length > finalresult.length) {
      finalresult = string;
    }
  }
  return finalresult;
}

function LongestString2( arr ) {
    return arr.reduce((a, b) => a.length <= b.length ? b : a)
    }