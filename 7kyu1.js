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
  let sum = 0;
  let maxSum = 0;
  
  for(let i = 0; i < a.length; i += 1) {
    for(let j = (i + 1); j < a.length; j += 1) {
      if(i < 0 && j < 0) {
        let array = a.slice(i, j);
        sum = array.reduce((sum, elem) => sum + elem);
        
        if(sum > maxSum) {
          maxSum = sum;
        }
      }
    }
  }
  return maxSum;
}
