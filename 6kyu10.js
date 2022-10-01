
/* If a < b and b < c then by transitivity we have a < c, right?
Well not in JavaScript. Find three values which give a nice transitive cycle!
Your method transitiveCycle() should return an array of 3 elements [a, b, c] such that
a < b && b < c && c < a === true
Also your elements should be equal to itself. */

function transitiveCycle() {
  return ['7', 9, '13'];
}


/*You are given three integer inputs: length, minimum, and maximum.
Return a string that:
    Starts at minimum
    Ascends one at a time until reaching the maximum, then
    Decends one at a time until reaching the minimum
    repeat until the string is the appropriate length */

function ascendDescend(length, minimum, maximum) {
  let result = '';
  for(let i = minimum; i < maximum; i += 1) result += i;
  for(let i = maximum; i > minimum; i -= 1) result += i;
  if(minimum === maximum) result = minimum.toString();
  return result.repeat(length).slice(0, length);
}


/* Your task is to write a higher order function for chaining together a list of unary functions. 
In other words, it should return a function that does a left fold on the given functions.
chained([a,b,c,d])(input)
Should yield the same result as
d(c(b(a(input)))) */

function chained(functions) {
  return function(x){
    for(let i = 0; i < functions.length; i += 1){
      x = functions[i](x);
    } return x;
  }
}


/* Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.
At long last, we need a way to unscramble what these pirates are saying.
Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.
For example:
grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
Should return ["sport", "ports"].
Return matches in the same order as in the dictionary. Return an empty array if there are no matches. */

function grabscrab(anagram, dictionary) {
  let result = [];
  let sortedAnagram = anagram.split('').sort().join('');
  
  //let sortedDictionary = dictionary.forEach(elem => elem.split('').sort().join('')).filter(elem => elem === sortedAnagram);
  //return sortedDictionary;
  
  for(let i = 0; i < dictionary.length; i += 1){
    if(dictionary[i].split('').sort().join('') === sortedAnagram) result.push(dictionary[i]);
  }
  return result;
}


/* Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. 
Bonus points for a solution that is efficient and/or that uses only built-in language functions. 
Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.*/

function permuteAPalindrome (input) { 
  let set = new Set;
  input.split('').forEach((elem) => set[set.has(elem) ? 'delete' : 'add'](elem));
  return set.size < 2;
}

