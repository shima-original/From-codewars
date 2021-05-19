/* Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. 
However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'. */
function maskify(cc) {
  let arr = cc.split('');
  for(let i = 0; i < (arr.length - 4); i += 1){
    arr[i] = '#';
  } return arr.join('');
}
  
//Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
function alternateCase(s) { 
  let result = [];
  let arr = s.split('');
  for (let i = 0; i < arr.length; i += 1){
    if(arr[i].toUpperCase() == arr[i]){
      result.push(arr[i].toLowerCase());
    } else{
      result.push(arr[i].toUpperCase());
    }
  }
  return result.join('');
}

//Count the number of divisors of a positive integer n.
function getDivisorsCnt(n){
    let counter = 0;
    for(let i = 0; i <= n; i += 1){
      if(n % i == 0) counter += 1;
    } return counter;
}
