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
