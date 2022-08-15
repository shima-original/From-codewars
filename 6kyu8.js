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

/*The number 1035 is the smallest integer that exhibits a non frequent property: one its multiples, 3105 = 1035 * 3, 
has its same digits but in different order, in other words, 3105, is one of the permutations of 1035.
The number 125874 is the first integer that has this property when the multiplier is 2, thus: 125874 * 2 = 251748
Make the function search_permMult(), that receives an upper bound, nMax and a factor k and will output the amount of pairs bellow nMax 
that are permuted when an integer of this range is multiplied by k. The pair will be counted if the multiple is less than nMax, too */
function search_permMult(nMax, k) { 
  let counter = 0; 
  for(let i = k; i < nMax; i += k){
    let a = i;
    let b = i / k;    
    if (`${a}`.split("").sort().join("") === `${b}`.split("").sort().join("")) {
      counter += 1;
    }
  }  
  return counter;
}
