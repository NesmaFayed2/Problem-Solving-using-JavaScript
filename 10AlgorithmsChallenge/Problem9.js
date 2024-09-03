function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) console.log(i);
    else {
      i % 3 === 0 && i % 5 === 0
        ? console.log("FizzBuzz")
        : i % 3 === 0 && i % 5 !== 0
        ? console.log("Fizz")
        : console.log("Buzz");
    }
  }
}
