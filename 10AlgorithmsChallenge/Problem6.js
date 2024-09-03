// 2 people A and B have same length of array all contains int, and with a startFlag odd and even. what you need to do is to calculate the sum of arrayA-arrayB of each odd item or even item (based on startFlag). if sum >0, A wins, output A's name, if sum<0, output B's name, if sum==0, output Tie
// like:
// Tom=[2,2,3]
// Jerry=[3,1,4]
// flag=odd
// sum = (2-3)+(3-4)=-2

// output "Jerry"
function calculatewinner(arrA, arrB, flag) {
  let sum = 0;
  startingIndex = flag === "odd" ? 0 : 1;

  for (let i = startingIndex; i < arrA.length; i += 2) {
    sum = arrA[i] - arrB[i];
  }
  if (sum > 0) {
    return "A";
  } else if (sum < 0) {
    return "b";
  } else {
    return "Tie";
  }
}
