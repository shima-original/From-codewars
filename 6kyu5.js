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
  let diff = n > m ? n - m : m - n;
  let time1 = speeds[0] * diff + 2 * speeds[1] + speeds[2] + speeds[0] * n;
  let time2 = speeds[3] * diff + 2 * speeds[1] + speeds[2] + speeds[0] * m;
  let result = time1 > time2 ? time2 : time1;
  return result;
}
