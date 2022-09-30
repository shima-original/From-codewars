
/* If a < b and b < c then by transitivity we have a < c, right?
Well not in JavaScript. Find three values which give a nice transitive cycle!
Your method transitiveCycle() should return an array of 3 elements [a, b, c] such that
a < b && b < c && c < a === true
Also your elements should be equal to itself. */

function transitiveCycle() {
  return ['7', 9, '13'];
}


/*You are given three integer inputs: length, minimum, and maximum.
Return a string that:
    Starts at minimum
    Ascends one at a time until reaching the maximum, then
    Decends one at a time until reaching the minimum
    repeat until the string is the appropriate length */

function ascendDescend(length, minimum, maximum) {
  let result = '';
  for(let i = minimum; i < maximum; i += 1) result += i;
  for(let i = maximum; i > minimum; i -= 1) result += i;
  if(minimum === maximum) result = minimum.toString();
  return result.repeat(length).slice(0, length);
}


/* Your task is to write a higher order function for chaining together a list of unary functions. 
In other words, it should return a function that does a left fold on the given functions.
chained([a,b,c,d])(input)
Should yield the same result as
d(c(b(a(input)))) */

function chained(functions) {
  return function(x){
    for(let i = 0; i < functions.length; i += 1){
      x = functions[i](x);
    } return x;
  }
}

