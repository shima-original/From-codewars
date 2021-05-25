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

/*Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. 
Assume that the argument is an integer. Return null if the argument is not valid.*/
var maxRedigit = function(num) {
  return result = (num > 99 && num < 1000) ? parseInt(num.toString().split('').sort((a, b) => b - a).join('')) : null;
};

/*Input : an array of integers.
Output : this array, but sorted in such a way that there are two wings:  the left wing with numbers decreasing, the right wing with numbers increasing.
The two wings have the same length. If the length of the array is odd the wings are around the bottom, if the length is even the bottom is considered
to be part of the right wing. Each integer l of the left wing must be greater or equal to its counterpart r in the right wing, 
the difference l - r being as small as possible. In other words the right wing must be nearly as steep as the left wing.*/
function makeValley(arr) {
   
    let left = [];
    let right = [];
  
    arr.sort((a, b) => b - a);
   
    for(i = 0; i < (arr.length - 1); i += 2){
      left.push(arr[i]);
      right.unshift(arr[i + 1]);
    } 
  
  if(arr.length % 2)right.unshift(arr[arr.length - 1]);
  let result = left.concat(right);
  return result;
}
