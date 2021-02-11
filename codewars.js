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
return (bonus === true ? '£' + salary*10 : '£' + salary);
}


/*It's the academic year's end, fateful moment of your school report. The averages must be calculated. 
All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
Return the average of the given array rounded down to its nearest integer.The array will never be empty   */

function getAverage(marks){
  let count = 0;
   for (let item of marks) {
    count += item;
   }
  return Math.floor(count/marks.length);
}


/*This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.  */

const solve = (x, y) => x / y;


/*In this simple exercise, you will create a program that will take two lists of integers, a and b. 
Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. 
You must find the difference of the cuboids' volumes regardless of which is bigger.
For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. 
Therefore, the function should return 8.Your function will be tested with pre-made examples as well as random ones.
If you can, try writing it in one line of code.  */

function findDifference(a, b) {
  let result = (a[0]*a[1]*a[2]) - (b[0]*b[1]*b[2]);
  return result > 0 ? result : -(result);
}


//Your task is to find the first element of an array that is not consecutive.By not consecutive we mean not exactly 1 larger than the previous element of the array.

function firstNonConsecutive (arr) {
  for(let i = 0; i < arr.length; i += 1) {
    if(arr[i + 1] != arr[i] + 1) return(arr[i + 1]); 
  }
   return(null);
} 





