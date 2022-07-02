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


