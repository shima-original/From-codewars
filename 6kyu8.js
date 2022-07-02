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

/*Let's implement the range function:
range([start], stop, [step])
range(1, 11);
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
range(1, 4, 0); // /!\ note that the step is 0
=> [1, 1, 1]
range(0);
=> []
range(10, 0); // /!\ note that the end is before the start
=> []
range(10);
=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
range(0, 30, 5);
=> [0, 5, 10, 15, 20, 25]
start, if omitted, defaults to 0; step defaults to 1.
returns a list of integers from start to stop, incremented by step, exclusive.
Note that ranges that stop before they start are considered to be zero-length instead of negative. */

function range(start, end, step) {
  
  let result = [];
  
  if(step === undefined) step = 1;
  if(end === undefined) {
    end = start;
    start = 0;
  }
  if(end < start) return [];
  
  function stepFunction(a, b, c){
    result.push(a);
    a += c;
    if(a < b) stepFunction(a, b, c);
    return result;
  }
  
  stepFunction(start, end, step);
  
  return result;
}
