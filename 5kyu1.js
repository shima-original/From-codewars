/* The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. 
If the list is made up of only negative numbers, return 0 instead.
Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.*/

var maxSequence = function(arr){
  let sum = 0;
  let  min = 0;
  let max = 0;
  for(let i = 0; i < arr.length; i += 1){
    sum += arr[i];
    min = Math.min(min, sum);
    max = Math.max(max, sum - min);
  } return max;
}

/*This time we want to write calculations using functions and get the results. Let's have a look at some examples:
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:
    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three())); */

function zero() {
  if(arguments.length === 0) return 0;
  else{
    return arguments[0](0); 
  }
}
function one() {
  if(arguments.length === 0) return 1;
  else{
    return arguments[0](1);
  }
}
function two() {
    if(arguments.length === 0) return 2;
    else{
      return arguments[0](2);
    }
}
function three() {
    if(arguments.length === 0) return 3;
    else{
      return arguments[0](3);
    }
}
function four() {
    if(arguments.length === 0) return 4;
    else{
      return arguments[0](4);
    }
}
function five() {
    if(arguments.length === 0) return 5;
    else{
      return arguments[0](5);
    }
}
function six() {
    if(arguments.length === 0) return 6;
    else{
      return arguments[0](6);
    }
}
function seven() {
    if(arguments.length === 0) return 7;
    else{
      return arguments[0](7);
    }
}
function eight() {
    if(arguments.length === 0) return 8;
    else{
      return arguments[0](8);
    }
}
function nine() {
    if(arguments.length === 0) return 9;
    else{
      return arguments[0](9);
    }
}

function plus(a) {
  return b => a + b;
}
function minus(a) {
  return b => b - a;
}
function times(a) {
  return b => a * b;
}
function dividedBy(a) {
  return b => Math.floor(b / a);
}
