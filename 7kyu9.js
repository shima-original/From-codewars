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
