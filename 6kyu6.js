
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



