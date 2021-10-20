
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
//1
function cleanString(s) {
  let arr = s.split('');
  for (let i = 0; i < arr.length; i += 1){
    if(arr[i] === '#') arr.splice(i - 1, 2);
  }
  return arr.join('');
}
//2
  let regexp = /\w#/gm;
  s.replace(regexp, '');
  if(regexp.test(s)) cleanString(s);
  else{
    let regexp2 = /#/gm;
    if(regexp2.test(s)) return s.replace(regexp2, '');
    else{
      return s;
    }
  } 
