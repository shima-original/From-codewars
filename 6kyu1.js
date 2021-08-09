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

/* Your friend Jackson was invited to a TV program called "Super Brain". In this program, contestant need to play a memory game. 
At the beginning, the moderator tells all contestants a sequence of numbers [A1, A2, ..., An]. Next, the moderator will do some operations on the sequence, 
including the following:
 "ADD x y n": All elements in the subsequence [Ax,..., Ay] increase by n. 
"REVERSE x y"：The subsequence [Ax,...,Ay] are arranged in reverse order.
"REVOLVE x y n": Shift the subsequence [Ax,...,Ay] to the left n times.
"INSERT x n": Insert n before Ax
"DELETE x": Delete Ax
"MIN x y": Query the minimum value in subsequence [Ax,..., Ay]
The query operation "MIN x y" is always the last operation. Each contestant should answer the correct number at this time.*/
function superBrain(sequence,operations){
   function add(sequence, x, y, n){
     for(let i = (x - 1); i < y; i += 1){
       sequence[i] += n;
     } return sequence;
   }
  function reversePart(sequence, x, y){
    const t = sequence[x - 1];
    sequence[x - 1] = sequence[y - 1];
    sequence[y - 1] = t;
    return sequence;
  }
  function revolve(sequence, x, y, n){
    let part = sequence.slice(x, (y + 1));
    for(let i = 0; i < n; i += 1){
      let elem = part.splice(-1, 1);
      part.push(elem);
    } return sequence.splice(x, (y - x + 1), part);
  }
  function insertN(sequence, x, n){
    return sequence.splice(x, 0, n);
  }
  function delElem(sequence, x){
    return sequence.splice((x - 1), 1);
  }
  function minOf(sequence, x, y){
    let arr = sequence.slice(x, y);
    arr.sort(function(a, b) { return a - b});
    return arr[0];
  }
  
  for(let i = 0; i < operations.length; i += 1){
    let action = operations[i].split(' ');
    if (action[0] == 'ADD'){
     sequence = add(sequence, action[1], action[2], action[3]);
    }
    else if(action[0] == 'REVERSE'){
      sequence = reversePart(sequence, action[1], action[2]);
    }
    else if(action[0] == 'REVOLVE'){
      sequence = revolve(sequence, action[1], action[2], action[3]);
    }
    else if(action[0] == 'INSERT'){
      sequence = insertN(sequence, action[1], action[2]);
    }
    else if(action[0] == 'DELETE'){
      sequence = delElem(sequence, action[1]);
    }
    else{
      sequence = minOf(sequence, action[1], action[2]);
    }
  } return sequence;
}
