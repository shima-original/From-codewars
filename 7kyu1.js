/* In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
You have function with one side of the DNA (string); you need to get the other complementary side. 
DNA strand is never empty or there is no DNA at all. */
function DNAStrand(dna){
  let arr = dna.split('');
  for(let i = 0; i < arr.length; i += 1) {
    if(arr[i] == 'A') arr[i] = 'T';
    else if(arr[i] == 'T') arr[i] = 'A';
    else if(arr[i] == 'C') arr[i] = 'G';
    else if(arr[i] == 'G') arr[i] = 'C';
  }
  let DNAStrand = arr.join('');
  return DNAStrand;
}

/*Write a function named repeater() that takes two arguments (a string and a number), 
and returns a new string where the input string is repeated that many times.*/
function repeater(string, n){
  let arr = [];
  for(let i = 0; i < n; i += 1) {
    arr[i] = string;
  }
  return arr.join('');
}

/* Create a function hat takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.
Any remaining seconds left over are ignored. */
function toTime(seconds) {
 let minutes = Math.trunc(seconds / 60);
 let hours = Math.trunc(minutes / 60);
 let minutesResult = minutes % 60;
 return `${hours} hour(s) and ${minutesResult} minute(s)`;
}

/* You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements, 
or -1, Nothing, or a similar empty value, if there is no such sum. No negative element should be present in this sum. */
function maxSumBetweenTwoNegatives(a) {
  const sums = [-1];
  let inNegativeRange = false;
  let currentSum = 0;
  
  a.forEach((val) => {
    if(val < 0) {
      if(inNegativeRange) {
        sums.push(currentSum);
        currentSum = 0;
      } else {
        inNegativeRange = true;
      }
    } else if (inNegativeRange) {
      currentSum += val;
    }
  })
  return Math.max(...sums);
}

/* In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index 
(N.B. There may be more than one empty room in some test cases).
'X' --> busy 'O' --> empty
If all rooms are busy, return 'None available!'. */
function meeting(x){
  let arr = [];
  let result = 0;
  
  for(let i = 0; i < x.length; i += 1) {
    if(x[i] == "O") {
      arr.push(i);
      result = arr[0];
    } 
  }
  
  if(arr.length == 0) {
    result = 'None available!';
  }
  return result;
}
