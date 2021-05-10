/*Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null.
If a and b have the same length treat a as the longer producing b+reverse(a)+b */
function shorter_reverse_longer(a,b){
  let result = [];
  let arrA = a.split('');
  let arrB = b.split('');
  if (arrA.length >= arrB.length){
    result.push(arrB.join(''), arrA.reverse().join(''), arrB.join('')); 
  }
  else {
    result.push(arrA.join(''), arrB.reverse().join(''), arrA.join(''));
  }
  return result.join('');
}

//return a binary sum as a string 
function addBinary(a,b) {
  return (a + b).toString(2);
}
