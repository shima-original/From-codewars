
//Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number. 
function solution(value){
  let arr = value.toString().split('');
  while(arr.length < 5) {
    arr.unshift('0');
  }
  return `Value is ${arr.join('')}`;
}

