/*Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. 
You can guarantee that input is non-negative.*/
var countBits = function(n) { 
  let result = n.toString(2).split('');  
  return result.filter(x => x === '1').length;
};

/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.*/
function persistence(num) {
  let counter = 0;
  
  function count(num, counter){
    let array = num.toString(10).split(''); 
    if(array.length == 1) return counter;
    else{
      num = array.reduce((result, current) => result *= current, 1);  
      counter += 1;
      return count(num, counter);
    }
  } 
  
  return count(num, counter);
}

