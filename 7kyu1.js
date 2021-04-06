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

/*My friend John likes to go to the cinema. He can choose between system A and system B.
System A : he buys a ticket (15 dollars) every time
System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 
then for each additional ticket he pays 0.90 times the price paid for the previous ticket.
Example:
If John goes to the cinema 3 times:
System A : 15 * 3 = 45
System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)
John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A.
The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) 
and returns the first n such that
ceil(price of System B) < price of System A. */
function movie(card, ticket, perc) {
    let n = 0;
    let sysA = ticket*n;
    let ticketNew = ticket*perc;
    let sysB = card + ticketNew;
  
    while (sysA < sysB) {
      ticketNew *= perc;
      sysB += ticketNew;
      sysA += ticket;
      n += 1;
    }
    return n;
};

