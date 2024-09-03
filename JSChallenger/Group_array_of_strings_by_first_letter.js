/*Write a function that takes an array of strings as argument. 
Group those strings by their first letter. Return an object that contains properties with keys representing first letters. 
The values should be arrays of strings containing only the corresponding strings. For example, 
the array ['Alf', 'Alice', 'Ben'] should be transformed to. { a: ['Alf', 'Alice'], b: ['Ben']}
 */
function myFunction(arr) {
  result = {};

  arr.forEach((element) => {
    //getting the fist char of the name
    let firstchar = element[0].toLowerCase();

    //make properties if not existed
    if (!result[firstchar]) {
      result[firstchar] = [];
    }
    // assign the value of names
    result[firstchar].push(element);
  });
  return result;
}
let r = myFunction(["Alf", "Alice", "Ben"]);
console.log(r);

//his way
function myFunction2(arr) {
  return arr.reduce((acc, cur) => {
    const firstLetter = cur.toLowerCase().charAt(0);
    return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
  }, {});
}

//trying it:

function myFunc(arr) {
  return arr.reduce((acc, cur) => {
    const firstchar = cur.toLowerCase().charAt(0);
    return { ...acc, [firstchar]: [...(acc[firstchar] || []), cur] };
  }, {});
}

//trying reduce function
//if empty array passed it will throug error because Reduce of empty array with no initial value
function trying(arr) {
  arr.reduce((acc, cur) => {
    console.log(acc);
  },1);
}

trying([]);
