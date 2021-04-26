/* There are five workers : James,John,Robert,Michael and William.They work one by one and on weekends they rest. 
Order is same as in the description(James works on mondays,John works on tuesdays and so on).You have to create a function 'task' that will take 3 arguments(w, n, c):
    Weekday
    Number of trees that must be sprayed on that day
    Cost of 1 litre liquid that is needed to spray tree,let's say one tree needs 1 litre liquid.
Let cost of all liquid be x
Your function should return string like this : 'It is (weekday) today, (name), you have to work, 
you must spray (number) trees and you need (x) dollars to buy liquid' */
function task(w, n, c) {
  let worker = {
    Monday: 'James',
    Tuesday: 'John',
    Wednesday: 'Robert',
    Thursday: 'Michael',
    Friday: 'William'
  };
  let man = worker[`${w}`];
  let x = n*c;
  return `It is ${w} today, ${man}, you have to work, you must spray ${n} trees and you need ${x} dollars to buy liquid`;
}

//Yor task is to write function factorial
function factorial(n){
  let counter = 1;
  let arr = new Array(n);
  for(let i = n; i > 0; i -= 1) {
    counter *= i;
  } return counter;
}
