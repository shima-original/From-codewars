/* An array is called zero-plentiful if it contains multiple zeros, and every sequence of zeros is at least 4 items long.
Your task is to return the number of zero sequences if the given array is zero-plentiful, oherwise 0.*/

function zeroPlentiful(arr){
  
  let zeroCounter = 0;
  let counter = 0;
  
  for(let i = 0; i < arr.length; i += 1){
    if(arr[i] === 0){
      zeroCounter += 1;
    } else{
        if(zeroCounter > 0 && zeroCounter < 4) return 0;
        else if(zeroCounter === 0) continue;
        else {
          counter += 1;
          zeroCounter = 0;
        }
    }  
  }
      if(zeroCounter > 0 && zeroCounter < 4) return 0;
      else if(zeroCounter === 0) {}
      else {
          counter += 1;
          zeroCounter = 0;
        }
  return counter;
}

/* Each time they go on a mission, each Mormon converts a fixed number of people (reach) into followers. 
This continues and every freshly converted Mormon as well as every original Mormon go on another mission and convert the same fixed number of people each. 
The process continues until they reach a predefined target number of followers (target).
Converted Mormons are unique so that there's no duplication amongst them.
Complete the function that calculates how many missions Mormons need to embark on, in order to reach their target. 
While each correct solution will pass, for more fun try to make a recursive function.
All inputs are valid positive integers.*/

function Mormons(startingNumber, reach, target) {
    let number = startingNumber;
    let counter = 0;
    function newMormons(counter, number, reach, target){
      if(number >= target) return counter;
      else{
        counter += 1;
        number += (number * reach);
        return newMormons(counter, number, reach, target);
      }
    }
    return newMormons(counter, number, reach, target); 
}

/*Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.
Example:
['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P' */

function findMissingLetter(array)
{
  let str = array.join('');
  let first = str.charCodeAt(0);
  for(let i = 1; i < array.length; i += 1){
    if(array[i].charCodeAt(0) != first + i) return String.fromCharCode(first + i);
  }
}

/* You just got done with your set at the gym, and you are wondering how much weight you could lift if you did a single repetition. 
Thankfully, a few scholars have devised formulas for this purpose (from Wikipedia) :
Epley
1 RM=w(1+r30)\Large\text{1 RM} = w(1 + \frac{r}{30})1 RM=w(1+30r​)
McGlothin
1 RM=100w101.3−2.67123r\Large\text{1 RM} = \frac{100w}{101.3 - 2.67123r}1 RM=101.3−2.67123r100w​
Lombardi
1 RM=wr0.10\Large\text{1 RM} = wr^{0.10}1 RM=wr0.10
Your function will receive a weight w and a number of repetitions r and must return your projected one repetition maximum. 
Since you are not sure which formula to use and you are feeling confident, your function will return the largest value from the three formulas shown above,
rounded to the nearest integer. However, if the number of repetitions passed in is 1 (i.e., it is already a one rep max), your function must return w. 
Also, if the number of repetitions passed in is 0 (i.e., no repetitions were completed), your function must return 0.*/

function calculate1RM(w, r){
  let result1, result2, result3;
  if(r === 1) return w;
  else if(r === 0) return 0;
  else{
    result1 = Math.round(w * (1 + r/30));
    result2 = Math.round(100 * w / (101.3 - 2.67123 * r));
    result3 = Math.round(w * Math.pow(r, 0.10));
    return Math.max(result1, result2, result3);
  }
}

/* The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.*/

function count (string) {  
  
  let resultObj = {};
  let arr = string.split('');
  
  for(let i = 0; i < arr.length; i += 1){
    if(Object.prototype.hasOwnProperty.call(resultObj, arr[i])){
      resultObj[arr[i]] += 1;
    } else{
        resultObj[arr[i]] = 1;
    }
  }
  return resultObj;
}
