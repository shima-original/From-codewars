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

/* Let us consider this example (array written in general format):
ls = [0, 1, 3, 6, 10]
Its following parts:
ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]
The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above. */
function partsSums(ls) {
    let result = [];
    let value = ls.reduce(function(sum, current){
        return sum + current;
    }, 0);  
    for(let i = 0; i <= ls.length; i += 1){
          result.push(value);
          value = value - ls[i];
    }
    return result;
}
