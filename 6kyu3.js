/*Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed 
(Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.*/

function spinWords(str){
  let array = str.split(' '); 
  let words = array.map(function(elem){
    let symbols = elem.split('');
    let result = symbols.length > 4 ? symbols.reverse() : symbols;
    return result.join('');
  });    
  return words.join(' ');
} 
 

/*For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times. 
The input string consists of lowercase latin letters. Your function should return a tuple (in Python) (t, k) or an array (in Ruby and JavaScript) [t, k] */

function f(s) {  
  for(let i = 1; i <= s.length; i += 1){ 
    let result = s.split(s.substring(0, i));       
    if(result.join('') === '') return [s.substring(0, i), s.length/i];  
  } 
}


/*The goal of this exercise is to convert a string to a new string where each character in the new string is "(" 
if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.*/

function duplicateEncode(word){
  let array = word.toLowerCase().split('');
  let countArray = new Array(array.length);
  countArray.fill(0);
  let map = new Map();
  for(let i = 0; i < array.length; i += 1){
    for(let j = 0; j < array.length; j += 1){
      if(array[i] === array[j])countArray[i] += 1;
    }
    map.set(array[i], countArray[i]);
  } 
  for(let i = 0; i < array.length; i += 1){
    if(map.get(array[i]) === 1) array[i] = '(';
    else{
      array[i] = ')';
    }
  } return array.join('');
}

/*We at [SomeLargeCompany] have decided to expand on the functionality of our online text editor.
We have written a new function that accepts a phrase, a word and an array of indexes. 
We want this function to return the phrase, with the word inserted at each of the indexes given by the array.
However, our current function only gets the first insertion right, but all of the following ones are out of place!
Please fix this for us, and you will be showered with money.*/

function insertAtIndexes(phrase,word,indexes){
  let array = phrase.split('');
  for(let i = 0; i < indexes.length; i += 1){
    array.splice(indexes[i] + i, 0, word);
  } 
  return array.join('');
}

//Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

function isPrime(num) {
  if(num < 2) return false;
  else if(num === 2) return true;
  else if (num % 2 === 0) return false;
  else{
      for(let i = 3; i <= Math.sqrt(num); i += 2){
         if(num % i === 0) return false;
      } return true;
  }
}



