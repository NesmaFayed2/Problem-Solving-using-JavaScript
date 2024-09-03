function sortByObject(arr) {
  let sorting = (x, y) => x.b - y.b;
  return arr.sort(sorting);
}
