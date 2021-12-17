/* Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?
If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance". */
function balance(left,right){
  left.replace(/\!/g, '2');
  left.replace(/\?/g, '3');
  right.replace(/\!/g, '2');
  right.replace(/\?/g, '3');  
  let leftRes = left.split('').reduce(function(sum, current){
        return (sum + parseInt(current, 10));
    }, 0);
  let rightRes = right.split('').reduce(function(sum, current){
        return (sum + parseInt(current, 10));
    }, 0);  
  if (leftRes > rightRes) return "Left";
  else if (rightRes > leftRes) return "Right";
  else{
    return "Balance";
  }
}
