/*     You're at the zoo... all the meerkats look weird. 
Something has gone terribly wrong - someone has gone and switched their heads and tails around!
Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). 
It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions 
with the same exact logics    */


function fixTheMeerkat(arr) {
 let newArr = []; 
 let item = 0;
 while(arr.length != 0){
   let item = arr.pop();
   newArr.push(item); 
 } return newArr;
}


/*    It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
Return the total figure the individual will receive as a string prefixed with "£"   */

function bonusTime(salary, bonus) {
  let result = 0;
  
  switch(bonus) {
    case 'true':
      result = "£" + salary*10;    
      break;
    case 'false':
      result = "£" + salary;    
      break;
  } 
  return result;  
}
