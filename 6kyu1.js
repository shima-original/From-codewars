/*In a small restaurant there are A tables for one person and B tables for two persons.
It it known that N groups of people come today, each consisting of one or two people.
If a group consist of one person, it is seated at a vacant one-seater table. If there are none of them, it is seated at a vacant two-seater table. 
If there are none of them, it is seated at a two-seater table occupied by single person. 
If there are still none of them, the restaurant denies service to this group.
If a group consist of two people, it is seated at a vacant two-seater table. If there are none of them, the restaurant denies service to this group.
You are given a chronological order of groups coming. You are to determine the total number of people the restaurant denies service to.
Input contains two integers A and B - the number of one-seater and the number of two-seater tables respectively, 
and a list of integers - the number of people in each group of clients in chronological order of their arrival.
Return the total number of people the restaurant denies service to.*/
function restaurant(a,b,t){
  let result = 0;
  let c = 0;
  for(i = 0; i < t.length; i += 1){
    
    if(t[i] == 1){
      if(a > 0){
        a -= 1;
      }
      else if(a == 0 && b > 0){
        b -= 1;
        c += 1;
      }
      else if(a == 0 && b == 0 && c > 0){
        c -= 1;
      }
      else if(a == 0 && b == 0){
        result += 1;
      }
    }
    
    else if(t[i] == 2){
      if(b > 0){
        b -= 1;
      }
      else if(b == 0){
        result += 2;
      }
    }
  } return result;
}

/*In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it. */
function alphabetPosition(text) {
  let alphabet = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let arr = text.toLowerCase().split('');
  let result = [];
  
  for(let i = 0; i < arr.length; i += 1){
    for(let j = 0; j < alphabet.length; j += 1){
      if(arr[i] === alphabet[j]) result.push(j + 1);
    }
  } return result.join(' ');
}

/*Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.*/
function isValidIP(str) {
  let regexp = /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/;
    let result = str.match(regexp) === null ? false : true;
  
    let numbers = str.match(/\d{1,}/g);
  if(numbers != null){
    for(let i = 0; i < numbers.length; i += 1){
      if(numbers[i].match(/^0\d{1,2}/) != null) return false;
      else if(numbers[i].match(/^[3-9]\d{2}/) != null) return false; 
      else if(numbers[i].match(/^2[6-9]\d/) != null) return false; 
      else if(numbers[i].match(/^25[6-9]/) != null) return false; 
    } 
  }
    return result;
}

/*Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
We want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n. */
function digPow(n, p){
  let result = 0;
  let numbers = n.toString().split("").map(int=>parseInt(int, 10));
  
  for(let i = 0; i < numbers.length; i += 1){
    result += Math.pow(numbers[i], p + i);
  }
  return result % n == 0 ? result/n : -1;
}

/*Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
Rules for a smiling face:
    Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned */
function countSmileys(arr) {
  let regexp = /^[:;][-~]?[)D]$/; 
  let result = [];
  for(let i = 0; i < arr.length; i += 1){
    if(regexp.test(arr[i])) result.push(arr[i]);
  }   
  if(result === null) return 0;
  return result.length;
}


