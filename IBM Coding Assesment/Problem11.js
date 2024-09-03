function getProfitablePairs(profit, implementationCost) {
  const n = profit.length;
  let result = profit.map((p, i) => p - implementationCost[i]);

  result.sort((a, b) => b - a);

  let count = 0;

  let left = 0;
  let right = result.length - 1;

  while (left < right) {
    if (result[left] + result[right] > 0) {
      count += right - left;
      left++;
    } else {
      right--;
    }
  }
  return count;
}
