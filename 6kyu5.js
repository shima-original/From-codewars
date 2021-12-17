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
