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
