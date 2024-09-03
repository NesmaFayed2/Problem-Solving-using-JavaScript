function sumArr(a) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result = result + a[i];
  }

  return result;
}
//another way
function sumArr2(a) {
  return a.reduce((acc, cur) => acc + cur, 0);
}
