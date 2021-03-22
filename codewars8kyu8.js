/*  The cockroach is one of the fastest insects. 
Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored). */

function cockroachSpeed(s) {
  let result = Math.floor (s*100000/3600);
  return result;
}

//Return the Nth Even Number
function nthEven(n){
  let arr = [];
  arr[0] = 0;
  arr[1] = 2;
  
  for(let index = 1; index <= n; index += 1) {
    arr[index+1] = arr[index] + 2;
  }
  
  return arr[n - 1];
}
