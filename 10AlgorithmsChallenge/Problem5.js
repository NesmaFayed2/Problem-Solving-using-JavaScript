//Given a string return a string that is mosltly coommon used in that string
// "neeeesma" => "e"

///                 the solution :
//_____________________________________________________________

function maxChar2(str) {
  let max = 0;
  let maxchar = "";

  const obj = {};
  for (let char of str) {
    if (obj[char]) {
      obj[char] = obj[char] + 1;
    } else {
      obj[char] = 1;
    }
  }
  //convert obj to array
  let arr = Object.entries(obj);
  //iterate on that array
  for (const [key, val] of arr) {
    if (val > max) {
      max = val;
      maxchar = key;
    }
  }

  return maxchar;
}

//__________________________________________________
function maxChar3(str) {
  let max = 0;
  let maxchar = "";

  const obj = {};
  for (let char of str) {
    obj[char] = ++obj[char] || 1;
  }

  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      maxchar = key;
    }
  }

  return maxchar;
}
