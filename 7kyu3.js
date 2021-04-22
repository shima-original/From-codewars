
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

/*Your task is to write a function which checks if a string has valid spacing. The function should return either True or False.
For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. */
function validSpacing(s) {
  let arr = s.split('');
  let result = true;

  for(let i = 0; i < arr.length; i += 1){
    result = ((arr[i] == ' ') && (arr[i + 1] == ' ')) ||
       ((arr[i] == ' ') && (arr[i - 1] == ' ')) || (arr[0] == ' ') 
       || (arr[arr.length - 1] == ' ') ? false : true;
    if(result == false) break;
    } return result;
 }

/*You will be given an array of objects representing data about developers who have signed up to attend the coding meetup
that you are organising for the first time. Your task is to return the number of JavaScript developers coming from Europe. */
function countDevelopers(list) {
  let counter = 0;
  for(let i = 0; i < list.length; i += 1){
    if(list[i].continent == 'Europe' && list[i].language == 'JavaScript'){
      counter += 1;
    }
  } return counter;
}


/*Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.
If the sequence is empty, you should return 0. */
function evenLast(numbers) {
  let result = 0;
  
  let bool = numbers.map(elem => Number.isInteger(elem));
  if(bool == false) {
    return 0;
  }
  
  for(let i = 0; i < numbers.length; i += 1) {
    if(i % 2 == 0) {
      result += Number(numbers[i]);
    } 
  } 
  return result * Number(numbers[numbers.length - 1]);
}

