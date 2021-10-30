
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

/*You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings 
representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and 
you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly 
ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.*/

function isValidWalk(walk) {
  
  let ncount = 0;
  let scount = 0;
  let wcount = 0;
  let ecount = 0;
  
  if(walk.length > 10 || walk.length < 3) return false;
  
  for(let i = 0; i < walk.length; i += 1){
    if (walk[i] === 'n') ncount += 1;
    else if (walk[i] === 's') scount += 1;
    else if (walk[i] === 'w') wcount += 1;
    else if (walk[i] === 'e') ecount += 1;
    else{
      return false;
      }
  }
  
  if((ncount === scount) && (wcount === ecount)) return true;
  else{
    return false;
  }
}

/*Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. 
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, 
and so on. It gets obvious if we write b's elements in terms of squares.
If, for example, we change the first number to something else, comp may not return true anymore.
comp(a,b) returns false because in b 132 is not the square of any number of a.
comp(a,b) returns false because in b 36100 is not the square of any number of a.
Remarks
    a or b might be [] or {} (all languages except R, Shell).
    a or b might be nil or null or None or nothing.
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.*/
function comp(array1, array2){
  if(array1 === null || array2 === null) return false;
  else if(array1.length != array2.length){
    return false;
  }
  else{
    let array1S = array1.sort((a,b) => a-b);
    let array2S = array2.sort((a,b) => a-b);
    for(let i = 0; i < array1S.length; i += 1){
      if(array1[i]*array1[i] != array2[i]) return false;
    }
    return true;
  }
}

//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

/*Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. 
Consonants are any letters of the alphabet except "aeiou".
We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.*/
function solve(s) {
  let arr = s.split('');

  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  function countConsonants(arr){
      let current = [];
      let result = 0;
      let count = 0;
      for(let i = 0; i < arr.length; i += 1){
        if(arr[i] === 'a'|| arr[i] === 'e'|| arr[i] === 'i'|| arr[i] === 'o'|| arr[i] === 'u'){
          if(count > result) result = count;
          current = [];
        }else{
          current.push(arr[i]);
        }
      } return result;
  }
  
  function countResult(){
    
  }
};
