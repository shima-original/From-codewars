/* You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!
You have to write a method, that return the length of the missing array.*/

function getLengthOfMissingArray(arrayOfArrays) {
  if(arrayOfArrays === null) return 0;
  if(arrayOfArrays.length == 0) return 0;
  
  for(let j = 0; j < arrayOfArrays.length; j += 1){
    if(arrayOfArrays[j] === null) return 0;
  }
  
  arrayOfArrays.sort((a, b) => a.length - b.length);
  if(arrayOfArrays[0].length == 0) return 0;
  for(let i = 0; i < arrayOfArrays.length; i += 1){
    let curLength = arrayOfArrays[i].length;
    let nextLength = arrayOfArrays[i + 1].length; 
    if(curLength != nextLength - 1) return curLength + 1; 
  }
}


/* Training on Mexical Wave.
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
If the character in the string is whitespace then pass over it as if it was an empty seat*/

function wave(str){
  let result = [];
  let arr = str.split('');
  
  for(let i = 0; i < arr.length; i += 1){
    if(arr[i] != ' '){
        arr[i] = arr[i].toUpperCase();
        result.push(arr.join(''));
        arr[i] = arr[i].toLowerCase();
    } 
    else{
      continue;
    }
  }
  return result;
}

/*The number 1035 is the smallest integer that exhibits a non frequent property: one its multiples, 3105 = 1035 * 3, 
has its same digits but in different order, in other words, 3105, is one of the permutations of 1035.
The number 125874 is the first integer that has this property when the multiplier is 2, thus: 125874 * 2 = 251748
Make the function search_permMult(), that receives an upper bound, nMax and a factor k and will output the amount of pairs bellow nMax 
that are permuted when an integer of this range is multiplied by k. The pair will be counted if the multiple is less than nMax, too */
function search_permMult(nMax, k) { 
  let counter = 0; 
  for(let i = k; i < nMax; i += k){
    let a = i;
    let b = i / k;    
    if (`${a}`.split("").sort().join("") === `${b}`.split("").sort().join("")) {
      counter += 1;
    }
  }  
  return counter;
}

/*Let’s assume that when you register a car you are assigned two numbers:

    Customer ID – number between 0 and 17558423 inclusively. It is assigned to car buyers in the following order: the first customer receives an ID of 0, the second customer receives an ID of 1, the third - 2, and so on;

    A Number Plate – 6-character combination composed of the series - three Latin lowercase letters from a to z; and the serial number - three digits from 0 to 9. Example: aaa001, xyz123, tok469;

Each Number Plate is related to the given Customer ID. For example:

Customer ID of 0: aaa001

Customer ID of 21: aaa022

Customer ID of 169: aaa170
Your Task
Write a function

findTheNumberPlate

which takes the Customer ID as an argument, calculates the Number Plate corresponding to this ID and returns it as a string;
Rules

    The serial number changes first. For each 3-letter series it goes through 001 to 999, such as: aaa001, aaa002, aaa003, ......, aaa998, aaa999

    The leftmost letter in the series switches alphabetically each time after the serial number has moved through 001 to 999 inclusively;

    aaa001...aaa999

    at this point the leftmost letter will switch alphabetically, while the serial number repeats the same cycle again;

    baa001...baa999,
    ...... ,
    zaa001...zaa999

    The middle letter switches alphabetically each time after the leftmost letter has moved through a to z and the z** series has moved through 001 to 999.

    zaa001...zaa999

    at this point the middle letter will switch alphabetically, while the the leftmost letter and the serial number repeat the same cycle again;

    aba001...aba999,
    bba001...bba999,
    ......,
    zza001...zza999

    The rightmost letter switches alphabetically each time after the middle letter has moved through a to z and the zz* series has moved through 001 to 999.

    zza001...zza999

    at this point the rightmost letter will switch alphabetically, while the middle letter, the leftmost letter, and the serial number repeat the same cycle again;

    aab001...aab999,
    bab001...bab999,
    ......,
    zab001...zab999,
    abb001...abb999,
    bbb001...bbb999,
    ......,
    zbb001...zbb999,
    acb001...acb999,
    ......, 
    zzz001...zzz999

Note
If the serial number has less than 3 digits, the missing places should be adjusted with zeroes.

i.e: 12 should equal 012; 4 should equal 004.

Once again, the customer ID starts with 0. */

// the alphabet: 'abcdefghijklmnopqrstuvwxyz'
function findTheNumberPlate(customerID){
    let newCustomerID = customerID % (999*26*26*26);
  
    let num = newCustomerID % 999 + 1;
    if(num < 10) num = `00` + `${num}`;
    else if(num < 100) num = `0` + `${num}`;
    
    function letterCounter (numberX){
        return String.fromCharCode('a'.charCodeAt(0) + numberX % 26);
    }
  
     let thousandNum = newCustomerID / 999;
     let firstLetter = letterCounter(thousandNum);
     
     let nextNum = thousandNum / 26;
     let secondLetter = letterCounter(nextNum);
  
     let nextNextNum = nextNum / 26;
     let thirdLetter = letterCounter(nextNextNum);
  
     return `${firstLetter}${secondLetter}${thirdLetter}${num}`;
  
}
