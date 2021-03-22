/*  The cockroach is one of the fastest insects. 
Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored). */

function cockroachSpeed(s) {
  let result = Math.floor (s*100000/3600);
  return result;
}

//Return the Nth Even Number

function nthEven(n){
  return 2*(n-1);
}

//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
  let arr = [];
  
  for(let i = 0; i <= (b - a); i += 1) {
    arr[i] = a + i;
  }
  
  return arr;
}


/* Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA. */

function DNAtoRNA(dna) {
  let arrDna = dna.split('');
  
  let rna = arrDna.map(item => item == 'T'? 'U' : item);  
  return rna.join('');
}

