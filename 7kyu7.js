/* Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. 
However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'. */
function maskify(cc) {
  let arr = cc.split('');
  for(let i = 0; i < (arr.length - 4); i += 1){
    arr[i] = '#';
  } return arr.join('');
}
  
//Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
function alternateCase(s) { 
  let result = [];
  let arr = s.split('');
  for (let i = 0; i < arr.length; i += 1){
    if(arr[i].toUpperCase() == arr[i]){
      result.push(arr[i].toLowerCase());
    } else{
      result.push(arr[i].toUpperCase());
    }
  }
  return result.join('');
}

//Count the number of divisors of a positive integer n.
function getDivisorsCnt(n){
    let counter = 0;
    for(let i = 0; i <= n; i += 1){
      if(n % i == 0) counter += 1;
    } return counter;
}

/*To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. 
This function must return another function, which takes a single integer as an argument and returns a new array.
The returned array should consist of each of the elements from the first array multiplied by the integer.  */
function multiplyAll(arr){
  return function multiplyNumber(n){
    return arr.map((elem) => elem*n);
  }
}

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
