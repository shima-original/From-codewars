//Just a simple sorting usage. Create a function that returns the elements of the input-array / list in a sorted manner.
sortme = function( names ){
 return names.sort();
}

//Write a function filterLongWords that takes a string sentence and an integer n. Return a list of all words that are longer than n.
function filterLongWords(sentence, n) {
  let result = [];
  let arr = sentence.split(' ');
    for(let i = 0; i < arr.length; i += 1){
      let word = arr[i].split('');
      if(word.length > n) result.push(arr[i]);
    } return result;
}

//Given a sequence of numbers, find the largest pair sum in the sequence.
function largestPairSum(numbers)
{
  let sorted = numbers.sort((a, b) => b - a);
  let result = sorted[0] + sorted[1];
  return result;
}

/*In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, 
are named with letters from a to m. The colors used by the printer are recorded in a control string. 
For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, 
one time color h then one time color a... Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. 
aaaxbbbbyyhwawiwjjjwwm with letters not from a to m. You have to write a function printer_error which given a string will return the error 
rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. 
Don't reduce this fraction to a simpler expression. The string has a length greater or equal to one and contains only letters from ato z. */
function printerError(s) {
    let counter = 0;
    let arr = s.split('');
    for(let i = 0; i < arr.length; i += 1){
        if(arr[i] != 'a' & arr[i] != 'b' && arr[i] != 'c' && arr[i] != 'd' && arr[i] != 'e'
          && arr[i] != 'f' && arr[i] != 'g' && arr[i] != 'h' && arr[i] != 'i'
          && arr[i] != 'j' && arr[i] != 'k' && arr[i] != 'l' && arr[i] != 'm'){
          counter += 1;
        }
    } return `${counter}/${arr.length}`;
}

/* You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.at must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left. */
function lastSurvivor(letters, coords) {
  let arrLetters = letters.split('');
  for (let i = 0; i < coords.length; i += 1){
    arrLetters.splice(coords[i], 1);
  } return arrLetters[0];
}
