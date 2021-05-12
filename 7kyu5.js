/*Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null.
If a and b have the same length treat a as the longer producing b+reverse(a)+b */
function shorter_reverse_longer(a,b){
  let result = [];
  let arrA = a.split('');
  let arrB = b.split('');
  if (arrA.length >= arrB.length){
    result.push(arrB.join(''), arrA.reverse().join(''), arrB.join('')); 
  }
  else {
    result.push(arrA.join(''), arrB.reverse().join(''), arrA.join(''));
  }
  return result.join('');
}

//return a binary sum as a string 
function addBinary(a,b) {
  return (a + b).toString(2);
}

/*Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. 
Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.
Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example, */
function solve(arr){  
  let result = [];
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  arr.forEach(function(elem){
    let counter = 0;
    let word = elem.toLowerCase().split('');
    for(let i = 0; i < word.length; i += 1){
      if(word[i] === alphabet[i]){
        counter += 1;
      }
    }
    result.push(counter);
    counter = 0;
  });
  return result;
};

/*Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighbouring numbers is equal (note that 0 and n - 1 are neighbouring, too). 
Given n and firstNumber/first_number, find the number which is written in the radially opposite position to firstNumber.*/
function circleOfNumbers(n, firstNumber) {
  if(firstNumber < n/2)return n/2 + firstNumber;
  else return -(n/2 - firstNumber);  
}

/* You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup
that you are organising.Your task is to return either:
    true if all developers in the list code in the same language; or
    false otherwise.*/
function isSameLanguage(list) {
  for(let i = 1; i < list.length; i += 1){
    if(list[i].language != list[0].language) return false;
  } return true;
}



