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

/*  */
