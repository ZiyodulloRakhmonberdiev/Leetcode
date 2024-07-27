// FizzBuzz

// https://leetcode.com/problems/fizz-buzz/

// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

function fizzBuzz(number){
  let result = [];

  for(let i = 1; i <= number; i++){

    if(i % 3 == 0 && i % 5 == 0){
      result.push("FizzBuzz");
      continue;
    }
    if(i % 5 == 0){
      result.push("Buzz");
      continue;
    }
    if(i % 3 == 0){
      result.push("Fizz");
      continue;
    }
    result.push(i.toString())
  }
  return result
}

console.log(fizzBuzz(20));