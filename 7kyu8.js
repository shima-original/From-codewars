/*Finish the solution so that it sorts the passed in array of numbers. 
If the function passes in an empty array or null value then it should return an empty array. */
function solution(nums){
  if(nums === null) return [];
  else if(nums.length === 0) return [];
  else{
    return nums.sort((a, b) => a - b);
  }
}

/* This time no story, no theory. The examples below show you how to write function accum.
accum("abcd") -> "A-Bb-Ccc-Dddd" */
function accum(s) {
	let arr = s.split('');
  let result = [];
  for(let i = 0; i < arr.length; i += 1) {
    if(i == arr.length - 1) result.push(arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i));
    else {
      result.push(arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i) + '-');
    }
  } 
  return result.join('');
}
