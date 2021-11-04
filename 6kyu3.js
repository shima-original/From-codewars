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
  
  let substr = [];
  let dividers = [];
  let counter = 1; 
  let array = s.split('');
  let n = Math.sqrt(array.length);
  
  for(let j = 2; j < n; j += 1){
    if(n % j === 0) dividers.push(j);  
  }
  
  for(let index = 0; index < dividers.length; index += 1){
      for( let i = 0; i < array.length; i += index){
        if(array[i] === substr[0]){
          if(array[i + (substr.length - 1)] === substr[substr.length - 1]){
            counter += 1;
          }
        }else{
        substr.push(array[i]);
        }
    }
  }
  
  return [substr, counter];
}
