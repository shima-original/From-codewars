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

/*Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes 
(a pair of farmers handshake only once).*/
function getParticipants(handshakes){
  return Math.ceil((1 + (1 + 8*handshakes)**(1/2))/2); 
}

//The goal is to come up with a function that can calculate inversions for any arbitrary array
function countInversions( array ){
  let counter = 0;
  //let sorted = array.sort((a, b) => a - b);
  for(let i = 0; i < array.length; i += 1){
    for(let j = i + 1; j < array.length; j += 1){
      if(array[i] > array[j]) counter += 1;
    }
  }
  return counter;
}
