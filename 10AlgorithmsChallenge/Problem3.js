//Palindrome
//Given a string , return true if the string is palindrome
//examples
//KAYAK
//MADAM
//codingtest
function palindrome(str) {
  let IsP = false;
  let reversed = str.split("").reverse().join("");
  if (reversed === str) IsP = true;

  return IsP;
}

//using two pointer techniqe
function palindrome2(s) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Initialize two pointers
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
