//Given an array of integers, return a new array with each value doubled.

function maps(x){
 let newX = x.map(item => item * 2);
 return newX;
}

/*Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. 
Alternatively, if you rent the car for 3 or more days, you get $20 off your total.Write a code that gives out the total amount for different days(d).*/

function rentalCarCost(d) {
  let count = 0;
  if(d >= 7) {
    count = 40*d - 50;
  }
  else if(3 <= d < 7) {
    count = 40*d - 20;
  }
  else {
    count = 40*d;
  } return count;
}
