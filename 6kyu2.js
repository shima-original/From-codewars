
/*Digital root is the recursive sum of all the digits in a number.Given n, take the sum of the digits of n. 
If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.*/
function digital_root(n) {
   
    if(n < 10) return n;
   
    else {
      
        let array = n.toString().split('').map(function(item){
          return parseInt(item);
        });
      
        n = array.reduce(function(a, b){
          return a + b;
        }, 0);  
        
        return digital_root(n);
      }
}

//Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd" Your task is to process a string with "#" symbols.
function cleanString(s) {
  let regexp = /\w#/g;
  s = s.replace(regexp, '');
  if(regexp.test(s)) cleanString(s);
  else{
    let regexp2 = /#/gm;
    if(regexp2.test(s)){
      s = s.replace(regexp2, '');
      return s;
    } 
    else{
      return s;
    }
  } 
}
