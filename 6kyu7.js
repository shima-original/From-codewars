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

/*Write a function that takes an array of numbers (integers for the tests) and a target number. 
It should find two different items in the array that, when added together, give the target value. 
The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; 
arget will always be the sum of two different items from that array).*/

function twoSum(numbers, target) {  
  for(let i = 0; i < numbers.length; i += 1){
    for(let j = i + 1; j < numbers.length; j += 1){
      if(numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}
