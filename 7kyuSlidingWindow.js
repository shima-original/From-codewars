//Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

//A simple solution 
function adjacentElementsProduct(array) {
  let result = array[0] * array[1];
  for(let i = 1; i < array.length; i += 1){
      if(array[i] * array[i + 1] > result) result = array[i] * array[i + 1];
  } return result;
}

//Sliding Window
function multiply(array){
  let n = 2;
  let maxResult = 0;
  let currentResult = 1;

  for(let i = 0; i < n; i += 1){
    currentResult *= array[i];
  }
  maxResult = currentResult;

  for(let i = n; i < array.length; i += 1) {
    if(array[i - n] != 0){
      currentResult = (currentResult/arr[i - n]) * arr[i];
      maxResult = Math.max(currentResult, maxResult);
    }
    else{
      continue;
    }
  }
  return maxResult;
}
