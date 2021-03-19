/* You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. 
Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.You don't need to worry about validation, 
since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.*/
function mergeArrays(arr1, arr2) {
   let mergedArray = arr1.concat(arr2).sort(function(a, b) {
     return a-b;
   });
   for(let i = 0; i < mergedArray.length; i += 1) {
     if(mergedArray[i] == mergedArray[i+1]) mergedArray.splice(i, 1);
   }
  return mergedArray;
}


/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number. */
function sumMix(x) {
  
  let item = 0;
  let result = 0;
  
  for(let i = 0; i < x.length; i += 1) {
    item = Number(x[i]);
    result += item;
  } return result;
}

/*Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. 
Fortunately, you are good at spotting them.Warn the sheep in front of the wolf that it is about to be eaten. 
Remember that you are standing at the front of the queue which is at the end of the array. 
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! 
You are about to be eaten by a wolf!" where N is the sheep's position in the queue. Note: there will always be exactly one wolf in the array.*/
function warnTheSheep(queue) {
  
  if (queue[queue.length - 1] == "wolf") return "Pls go away and stop eating my sheep";
  else {
    for (let i = 0; i < queue.length; i += 1) {
       if (queue[i] != "wolf") continue;
       else return (`Oi! Sheep number ${(queue.length - (i + 1))}! You are about to be eaten by a wolf!`);
    } 
  }
}

//Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
  i *= 2;
  return i;
}
