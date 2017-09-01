var max = require('../function_practice').max;
var isVowel = require('../function_practice').isVowel;
var greaterThan = require('../function_practice').greaterThan;



//describe what a block of code should do
  //what we're testing
    //what we expect
describe('max function', function(){
  test('should take two numbers as args and return largest of them', function(){
    expect(max(1, 2)).toBe(2);
    expect(max(20, 50)).toBe(50);
    expect(max(-1, -2)).toBe(-1);
  });
});

describe('isVowel function', function(){
  test('should take a single characters string and return true if vowel', function(){
    let vowels = 'aeiou';
    for (var i = 0; i < vowels.length; i++) {
      expect(isVowel(vowels[i])).toBe(true);
    }
    expect(isVowel('b')).toBe(false);
  });
});

describe('greaterThan function', function(){
  test('should take two args and return true if second is greater than first', function(){
    expect(greaterThan(20, 50)).toBe(true);
    expect(greaterThan(10, 1)).toBe(false);
  });
});
