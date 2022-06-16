/*Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
Notes:
    Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
    In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
    Beware: r must be without duplicates. */

function inArray(array1,array2){ 
  return array1.filter(elemA1 => (array2.find(elemA2 => elemA2.match(elemA1)))).sort();  
}

//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
  let odd = array.filter(elem => elem % 2 != 0);
  let result = odd.sort((a, b) => a - b);
  
  for(let i = 0; i < array.length; i += 1){
    if(array[i] % 2 === 0) result.splice(i, 0, array[i]);
  }
  return result;
}
