
/* You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. 
Three programming languages will be represented: Python, Ruby and JavaScript.
Your task is to return either:
    true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
    false otherwise.*/

function isLanguageDiverse(list) {
  let pcounter = 0;
  let rcounter = 0;
  let jcounter = 0;
  
  for(let i = 0; i < list.length; i += 1){
    if(list[i].language.toLowerCase() === 'python'){
      pcounter += 1;
    }
    else if(list[i].language.toLowerCase() === 'ruby'){
      rcounter += 1;
    }
    else{
      jcounter += 1;
    }
  }
  
  let max = Math.max(pcounter, rcounter, jcounter);
  if(max/pcounter <= 2 && max/rcounter <= 2 && max/jcounter <= 2) return true;
  else {
    return false;
  }
}


/*A stream of data is received and needs to be reversed.
Each segment is 8 bits long, meaning the order of these segments needs to be reversed
The total number of bits will always be a multiple of 8.
The data is given in an array*/

function dataReverse(data) {
  let result = [];
  
  while(data.length != 0){
    let byte = data.splice(0, 8);
    result.unshift(byte);
  }
  return result.flat();
}


/* An ATM ran out of 10 dollar bills and only has 100, 50 and 20 dollar bills.Given an amount between 40 and 10000 dollars (inclusive) and assuming that the ATM 
wants to use as few bills as possible, determinate the minimal number of 100, 50 and 20 dollar bills the ATM needs to dispense (in that order).*/
function withdraw(n) {
  for(let i = 0; i <= 100; ++i){
    for(let j = 0; j <= 100; ++j){
      for(let k = 0; k <= 100; ++k){
        if(k*100 + j*50 + i*20 === n) return [k, j, i];
      }
    }
  }
}

/*Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], 
drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21]. */

function deleteNth(arr,n){
  let newArr = [];
  let result = {};
  newArr = arr.map(function(a){
    if (result[a] < n && result[a] > 0){
      result[a] += 1;
      return a;
    }       
    else if(result[a] === undefined){
      result[a] = 1;
      return a;
    }
    else {
     result[a] += 1; 
    }
   });
  return newArr.filter((elem) => elem != undefined);
}

/* Your task is to write a function which cuts cancer cells from the body.
Cancer cells are divided into two types:

    Advance stage,described as letter C
    Initial stage,described as letter c

Rest cells are divided as follows:

    Normal cell,described as lowercase letter
    Important cell,described as uppercase letter

Prerequisites:

    Important cell,cannot be cut out.
    Advance cancer cell,should be cut out with adjacent cells if it can be done.

Function input is a string (representing a body), remove "cancer" characters (based on the described rules) 
and return the body cured of those "cancer" characters.*/

function cutCancerCells(organism){
  return organism.replace(/c|[a-z]?C[a-z]?/g, '');
}
