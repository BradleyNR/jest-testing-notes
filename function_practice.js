// 1.
// Define a function max() that takes two numbers as arguments and returns
// the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write an example of using the function.

function max(num1, num2){
  // Your answer here
  if(num1 >= num2){
    return num1;
  }else{
    return num2;
  }
}
var result = max(1, 9);
console.log(result);

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and
// returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3){
  // return max(max(num1, num2), num3);
  // Your answer here
  var biggestOfTwo;

  // first check if num1 > num2 -> result
  if(num1 > num2){
    biggestOfTwo = num1;
  }else{
    biggestOfTwo = num2;
  }

  // second check if the result > num3
  if(biggestOfTwo > num3){
    return biggestOfTwo;
  }else{
    return num3;
  }
}

console.log(maxOfThree(1, 2, 3));
console.log(maxOfThree(3, 2, 1));
console.log(maxOfThree(1, 3, 2));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and
// returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  // return 'aeiou'.indexOf(char) != -1
  // Your answer here
  if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
      return true;
  }else{
    return false;
  }
}

console.log(isVowel('a'));
console.log(isVowel('b'));


// 4.
// Write a function called `sum` that takes two parameters and returns the sum
// of those 2 numbers.
// Then, write and example of using the function.
function sum(num1, num2){
  return num1 + num2;
}

sum(9, 6);
console.log(sum(9, 6));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the
// average of those 3 numbers.
// Then, write and example of using the function.
function avg(num1, num2, num3){
  return (num1 + num2 + num3) / 3;
}

avg(2, 4, 6);

console.log(avg(2, 4, 6));

// 6.
// Write a function called `getLength` that takes one parameter
// (a string) and returns the length
// Then, write and example of using the function.
function getLength(string){
  return string.length;
}

getLength('a string');
console.log(getLength('a string'));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(num1, num2){
  return num2 > num1;
};

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.



// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.


module.exports = {
  max: max,
  maxOfThree: maxOfThree,
  isVowel: isVowel,
  greaterThan: greaterThan
};
