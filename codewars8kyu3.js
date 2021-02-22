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
  else if(3 <= d && d < 7) {
    count = 40*d - 20;
  }
  else {
    count = 40*d;
  } return count;
}


//Given a year, return the century it is in.

function century(year) {
  let count = 1;
  if (year <= 100) {
    return count;
  }
  else {
    do {
    year -= 100;
    count += 1;
  } while(year > 100);
  return count;
 }
}


/* Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
Your expected output is an array of positive integers from 1 to n (inclusive). */

function preFizz(n) {
  let arr = [];
  let count = 0;
  do {
    n -= 1;
    count += 1;
    arr.push(count);
  } while(n > 0);
  return arr;
}


//  Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

function greet (name, owner) {
  let result = (name === owner) ? "Hello boss" : "Hello guest";
  return result;
}

//Implement a function which multiplies two numbers.

function multiply(a, b) {
 return a*b;
}


//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
  let result = 0;
  for(let i = 0; i <= num; i +=1) {
    result += i;
  }
  return result;
}
