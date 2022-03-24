
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


/*The President's phone is broken. He is not very happy.
The only letters still working are uppercase E, F, I, R, U, Y.
An angry tweet is sent to the department responsible for presidential phone maintenance.
Decipher the tweet by looking for words with known meanings.
    FIRE = "You are fired!"
    FURY = "I am furious."
If no known words are found, or unexpected letters are encountered, then it must be a "Fake tweet."
Notes:
    The tweet reads left-to-right.
    Any letters not spelling words FIRE or FURY are just ignored
    If multiple of the same words are found in a row then plural rules apply*/

var fireAndFury = function(tweet) {
  
  let result = tweet.match(/F[UI]R[EY]/g);
  let decipher = []
  
  if(result === null) return 'Fake tweet.';
  
  for(let i = 0; i < result.length; i += 1){
    
    if(result[i] === 'FURY'){
      if(result[i - 1] !== 'FURY') decipher.push('I am', 'furious.');
      else if(result[i - 1] === 'FURY'){
        decipher.splice(decipher.lastIndexOf('furious.'), 0, 'really');
      }
    }
    
    else if(result[i] === 'FIRE'){
      if(result[i - 1] !== "FIRE") decipher.push('You', 'are fired!');
      else if(result[i - 1] === 'FIRE'){
        decipher.splice(decipher.lastIndexOf('are fired!'), 0, 'and you');
      }
    }
    
   else{
     return 'Fake tweet.';
   }
    
  } return decipher.join(' ');  
}

