function arrEquality(arr) {
  debugger;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        return false;
      }
    }
  }
  return true;
}


function arrEquality2( arr ) {
    return new Set(arr).size === 1
  }

