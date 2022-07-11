/* You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!
You have to write a method, that return the length of the missing array.*/

function getLengthOfMissingArray(arrayOfArrays) {
  if(arrayOfArrays === null) return 0;
  if(arrayOfArrays.length == 0) return 0;
  
  for(let j = 0; j < arrayOfArrays.length; j += 1){
    if(arrayOfArrays[j] === null) return 0;
  }
  
  arrayOfArrays.sort((a, b) => a.length - b.length);
  if(arrayOfArrays[0].length == 0) return 0;
  for(let i = 0; i < arrayOfArrays.length; i += 1){
    let curLength = arrayOfArrays[i].length;
    let nextLength = arrayOfArrays[i + 1].length; 
    if(curLength != nextLength - 1) return curLength + 1; 
  }
}


/* Training on Mexical Wave.
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
If the character in the string is whitespace then pass over it as if it was an empty seat*/

function wave(str){
  let result = [];
  let arr = str.split('');
  
  for(let i = 0; i < arr.length; i += 1){
    if(arr[i] != ' '){
        arr[i] = arr[i].toUpperCase();
        result.push(arr.join(''));
        arr[i] = arr[i].toLowerCase();
    } 
    else{
      continue;
    }
  }
  return result;
}

