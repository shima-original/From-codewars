//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string)
function solution(str, ending){
  let endStr = str.slice(-ending.length);
  if(ending.length != 0){
     return endStr === ending;
  }
 else {
   return true;
 }
}


/*Given a list of integers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero) */
function oddOrEven(array) {
  if(array.length === 0) return 'even';
  else {
     let result = array.reduce((sum, current) => sum + current);   
        if(result % 2) return 'odd';
        else {
              return 'even';
         }
  }  
}
