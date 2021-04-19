
//Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number. 
function solution(value){
  let arr = value.toString().split('');
  while(arr.length < 5) {
    arr.unshift('0');
  }
  return `Value is ${arr.join('')}`;
}

/*You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. 
If they are, return true. Else, return false.You can assume all values in the array are numbers. */
function smallEnough(a, limit){
  let result = true;
  a.map(function(elem){
    if(elem > limit) result = false;
  });
  return result;
}
