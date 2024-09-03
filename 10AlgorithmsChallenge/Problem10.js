/*
Capitalize the string 

capitalize("this is my name nesma fayed") => "This My Name Nesma Fayed"

*/

function Capitalized(str) {
  let words = str.split(" ");
  let result = [];
  for (word of words) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }

  return result.join(" ");
}

function Capitalized2(str) {
  let words = str.split(" ");
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}
