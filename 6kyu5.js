/* Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?
If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance". */
function balance(left,right){
 let replaced1 = left.replace(/\!/g, '2');
 let replaced2 = replaced1.replace(/\?/g, '3');
 let rightrepl1 = right.replace(/\!/g, '2');
 let rightrepl2 = rightrepl1.replace(/\?/g, '3');  
  let leftRes = replaced2.split('').reduce(function(sum, current){
        return (sum + parseInt(current, 10));
    }, 0);
  let rightRes = rightrepl2.split('').reduce(function(sum, current){
        return (sum + parseInt(current, 10));
    }, 0);  
  if (leftRes > rightRes) return "Left";
  else if (rightRes > leftRes) return "Right";
  else{
    return "Balance";
  }
}

/*When John uses the elevator, he will go through the following steps:
1. Waiting the elevator from m floor to n floor;
1a. Or take the stairs to m floor;
2. Waiting the elevator open the door and go in;
3. Waiting the elevator close the door;
4. Waiting the elevator down to 0 floor;
5. Waiting the elevator open the door and go out;
(the time of go in/go out the elevator will be ignored)
Given the following arguments:
n: An integer. The floor of John(0-based).
m: An integer. The floor of the elevator(0-based).
speeds: An array of integer. It contains four integer [a,b,c,d]
        a: The seconds required when the elevator rises or falls 1 floor
        b: The seconds required when the elevator open the door
        c: The seconds required when the elevator close the door
        d: The seconds required when John walks to n-1 or n+1 floor
Please help John to calculate the shortest time to go downstairs.*/
function shorterestTime(n,m,speeds) { 
  if(n === 0) return 0;  
  const[a, b, c, d] = speeds;
  return Math.min(
    n * d,
    Math.abs(n - m) * d + 2 * b + c + m * a,
    Math.abs(n - m) * a + 2 * b + c + n * a
  );
}

/*Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute 
from the gloves you have in your drawer.A pair of gloves is constituted of two gloves of the same color.
You are given an array containing the color of each glove.You must return the number of pair you can constitute.You must not change the input array.*/
function numberOfPairs(gloves)
{
  const gmap = {};
  let count = 0;
  gloves.forEach((glove) => {
    gmap[glove] = gmap[glove] || 0;
    gmap[glove] += 1;
    if (gmap[glove] == 2) {
      count += 1
      gmap[glove] = 0;
    }
  });  
  return count
}

/*Your meeting room can take up to 8 chairs. need will tell you how many have been taken. You need to find that many.
Find the spare chairs from the array of meeting rooms. Each meeting room tuple will have the number of occupants as a string. 
Each occupant is represented by 'X'. The room tuple will also have an integer telling you how many chairs there are in the room.
You should return an array of integers that shows how many chairs you take from each room in order, up until you have the required amount.
If you need no chairs, return "Game On". If there aren't enough spare chairs available, return "Not enough!".*/
function meeting(x, need){
  let counter = 0;
  let result = [];  
  if(need === 0) return 'Game On';  
  else {  
    for(let i = 0; i < x.length; i += 1){
      let guests = x[i][0].split('').length;
      let free = x[i][1] - guests;
      if(free < 0) free = 0;
      result.push(free);
      counter += free;   
      if (counter === need) return result;
      else if(counter > need) {
        result[result.length - 1] -= (counter - need);
        return result;
      }
    } 
    if(counter < need) return 'Not enough!';
  }
}   

/*Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers. */
function order(words){
  let result = Array(words.length).fill(0);
  let array = words.split(' ');
    for(let i = 0; i < array.length; i += 1){
      let index = array[i].match(/\d/);
      result.splice((index - 1), 1, array[i]);
    }  
  return result.filter(elem => elem != '0').join(' ');
}
