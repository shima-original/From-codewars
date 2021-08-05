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

/*Your friend Jackson was invited to a TV program called "Super Brain". In this program, contestant need to play a memory game. 
At the beginning, the moderator tells all contestants a sequence of numbers [A1, A2, ..., An]. 
Next, the moderator will do some operations on the sequence, including the following:
- "ADD x y n": All elements in the subsequence [Ax,..., Ay] increase by n. 
For sequence = [1, 2, 3, 4, 5], After operation "ADD 2 4 1", 
sequence will became to [1, 3, 4, 5, 5](2,3,4 --> 3,4,5)
- "REVERSE x y"：The subsequence [Ax,...,Ay] are arranged in reverse order.
For sequence = [1, 2, 3, 4, 5], After operation "REVERSE 2 4", 
sequence will became to [1, 4, 3, 2, 5](2,3,4 --> 4,3,2)
- "REVOLVE x y n": Shift the subsequence [Ax,...,Ay] to the left n times.
In each shift operation, the first element will move to the end of subsquence, others will move to the left 1 position.
For sequence = [1, 2, 3, 4, 5], After operation "REVOLVE 2 4 1", 
sequence will became to [1, 3, 4, 2, 5](2,3,4 --> 3,4,2)
- "INSERT x n": Insert n before Ax
For sequence = [1, 23, 3, 4, 5], After operation "INSERT 2 4" (insert 4 before the 2nd element), 
sequence will became to [1, 4, 23, 3, 4, 5]
- "DELETE x": Delete Ax
For sequence = [1, 23, 3, 4, 5], After operation "DELETE 2" (delete the 2nd element), 
sequence will became to [1, 3, 4, 5]
- "MIN x y": Query the minimum value in subsequence [Ax,..., Ay]
For sequence = [1, 2, 3, 4, 5], After operation "MIN 2 4", 
the output should be 2(2 is minimum value of subsquenece [2,3,4])
Note: all x,y above are 1-based and inclusive and x ≤ y.
The query operation "MIN x y" is always the last operation. Each contestant should answer the correct number at this time.
Each participant has only one opportunity to call for help from the outside audience. Jackson needs your help badly ;-)
Your task is to watch the TV program, then write a program to calculate the results for each operation, so that you can give Jackson the right answer when Jackson call for help.
Input/Output
[input] integer array sequence
An integer array.
3 ≤ sequence.length ≤ 1000
1 ≤ sequence[i] ≤ 100
[input] string array operations
Some operations of moderator.
1 ≤ operations ≤ 100
MIN x y always be the last one.
[output] an integer
The correct answer of MIN x y.
Example
For sequence = [1,2,3,4,5], operations=["MIN 2 4"], the output should be 2.
The min value of subsequence [2,3,4] is 2.
For sequence = [1,2,3,4,5], operations=["ADD 2 4 1","MIN 2 4"], the output should be 3.
After operation "ADD 2 4 1", sequence became to [1,3,4,5,5]
The min value of subsequence [3,4,5] is 3. */

